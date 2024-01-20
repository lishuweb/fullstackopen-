import Person from './Person';

const Persons = ({ persons, query, handleRemoveChange }) => (
  <div>
    {persons
      .filter(person => {
        console.log(person, "lishu")
        if(person.name)
        {
          return person.name.toLowerCase().includes(query)
        }
        return false;
      })
      .map(({ name, number, id }) => (
        <Person
          key={id}
          name={name}
          number={number}
          handleRemoveChange={handleRemoveChange(id, name)}
        />
      ))}
  </div>
);

export default Persons;