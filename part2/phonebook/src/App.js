import { useState, useEffect } from "react";
import FilterPerson from "./components/FilterPerson";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let myAxiosData = axios.get("http://localhost:3001/arr")
    myAxiosData.then((result) => {
      console.log(result);
      setPersons(result.data);
      console.log(result.data, "hello");
    })
  }, []);

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

      <Filter filter = {filter} 
              handleName = {handleName(setFilter)}/>

      <h1>add a new</h1>

      <PersonForm newName = {newName} 
                  newNumber = {newNumber}
                  handleDisplay = {handleDisplay}
                  handleName = {handleName}
                  handleNumber = {handleNumber}
      />

      <h1>Numbers</h1>
      
      <FilterPerson person = {persons} 
              filters = {filter}/>

    </div>
  )
}

export default App;