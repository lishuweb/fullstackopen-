const PersonForm = ({ newName, newNumber, handleChangeName, handleChangeNumber, handleNewPerson }) => {
  console.log(newName, "name");
  console.log(newNumber, "number");
  return (
    <div>
    <form onSubmit={handleNewPerson}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
}

export default PersonForm;