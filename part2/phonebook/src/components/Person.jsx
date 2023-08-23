const Person = ({ name, number, handleRemoveChange }) => (
    <div key={name}>
      {name} {number} <button onClick={handleRemoveChange}>delete</button>
    </div>
  )
  
  export default Person;