import { useDispatch } from 'react-redux';
import { createNewAnecdote } from '../services/anecdoteServices';
import { getId } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const newAnecdoteHandler = (event) => {
        event.preventDefault();
        const addNewAnecdote = {
            content: event.target.myInput.value,
            id: getId(),
            votes: 0
        };
        dispatch(createNewAnecdote(addNewAnecdote))
        event.target.myInput.value = '';
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdoteHandler}>
                <div>
                    <input name="myInput" />
                </div>
                <button>create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;