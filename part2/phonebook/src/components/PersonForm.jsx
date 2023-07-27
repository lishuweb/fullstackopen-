const PersonForm = ({newName, newNumber, handleDisplay, handleName, handleNumber}) => {
    
    return (
        <form onSubmit={handleDisplay}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button>add</button>
        </div>
    </form> 
    )  
}

export default PersonForm;