import Person from './Person';

const Persons = ({ persons, query, handleRemoveChange }) => (
  <div>
    {persons
      .filter(person => person.name.toLowerCase().includes(query))
      .map(({ name, number, id }) => (
        <Person
          key={id}
          name={name}
          number={number}
          handleRemoveChange={handleRemoveChange(id, name)}
        />
      ))}
  </div>
)

export default Persons;