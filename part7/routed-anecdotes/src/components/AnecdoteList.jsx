import { Link } from "react-router-dom";

const AnecdoteList = ({ data }) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <ul>
                {data.map(anecdote => 
                    <Link to = {`/anecdote/${anecdote.id}`}>
                        <li key={anecdote.id} >
                            {anecdote.content}
                        </li>
                    </Link>
                )}
                
                
            </ul>
        </div>
    )
};

export default AnecdoteList;