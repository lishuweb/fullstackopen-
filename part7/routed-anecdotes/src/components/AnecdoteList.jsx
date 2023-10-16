import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdote }) => {
  console.log(anecdote, "note");
  return( 
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdote.map((val) => (
    
          <li key={val.id}>
            <Link to = {`/anecdote/${val.id}`}>{val.content}</Link>
          </li> 
        ))}
      </ul>
    </div>
  )
};
  
export default AnecdoteList;