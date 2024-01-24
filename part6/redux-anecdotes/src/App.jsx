import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import { displayAnecdotes } from './reducers/anecdoteReducer';
// import getServices from './services/anecdoteServices';
import { useEffect } from 'react';
import anec from './services/anecdoteServices'
import AnecdoteLists from './components/AnecdoteLists';

const App = () => {
  // const anecdotes = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayAnecdotes(anec));
  })

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteLists />
      
    </div>
  )
}

export default App;