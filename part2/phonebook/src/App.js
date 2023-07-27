import { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";

const App = () => {
  const arr = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ];

  const [persons, setPersons] = useState(arr);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [filter, setFilter] = useState("");

  const handleDisplay = (event) => {
    event.preventDefault();

    let val = persons.find((value) => value.name === newName && value.number === newNumber)
      console.log(val);
      if(val)
      {
        alert(`${newName} ${newNumber} is already added to phonebook`);
      }
      else 
      {
        setPersons(
              persons.concat({
                name: newName,
                number: newNumber,
                id: persons.length + 1
              })
            )
      }
    setNewName("");
    setNewNumber("");
  }

    const handleName = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value);
    }

    const handleNumber = (event) => {
      setNewNumber(event.target.value);
    }

    
  return (
   
    <div>

      <h1>Phonebook</h1>

      {/* <Filter filters = {filter}
              handleName = {handleName(setFilter)}
               /> */}

      <h1>add a new</h1>

      <PersonForm newName = {newName} 
                  newNumber = {newNumber}
                  handleDisplay = {handleDisplay}
                  handleName = {handleName}
                  handleNumber = {handleNumber}
      />

      <h1>Numbers</h1>
      
      <Person person = {persons} />

    </div>
  )
}

export default App;