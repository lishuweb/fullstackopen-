import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/personService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [status, setStatus] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, []);

  const handleChange = setValue => e => setValue(e.target.value);

  const handleNewPerson = e => {
    e.preventDefault();

    const newPerson = 
      { 
        name: newName, 
        number: newNumber 
      };

    const dataReturned = persons.find(
      person => person.name === newName
    );

    if (dataReturned) 
    {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) 
      {
        personService
          .update(dataReturned.id, newPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id !== dataReturned.id ? person : returnedPerson
              )
            )
          })
          .catch(error => {
            setStatus('error');
            setNotification(`Information of ${dataReturned.name} has already been removed from server`);
            setTimeout(() => {
              setStatus(null);
              setNotification(null);
            }, 5000);

            setPersons(persons.filter(person => person.id !== dataReturned.id))
          })
      }
    } 
    else 
    {
      personService.create(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson));
          setStatus('success');
          setNotification(`Added ${addedPerson.name}`);
          setTimeout(() => {
            setStatus(null);
            setNotification(null);
          }, 5000);

          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.log(error.response.data.error);
        });
    }
  }

  const handleRemoveChange = (id, name) => () => {
    if (window.confirm(`Delete ${name}?`)) 
    {
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.name !== name))
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification 
        notification={notification} 
        status={status} 
      />

      <Filter 
        query={filterQuery} 
        handleChange={handleChange(setFilterQuery)} 
      />

      <h2>add a new</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        handleChangeName={handleChange(setNewName)}
        handleChangeNumber={handleChange(setNewNumber)}
        handleNewPerson={handleNewPerson}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        query={filterQuery}
        handleRemoveChange={handleRemoveChange}
      />
    </div>
  )
}

export default App;