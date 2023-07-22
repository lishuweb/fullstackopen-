import {useState} from "react";
import Header from "./Header";

const App = () => {

  let title1 = 'Anecdote of the day';
  let title2 = 'Anecdote with most votes';

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];
  const [votes, setVotes] = useState(arr);

  const next = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const mostValue = Math.max(...votes);
  const mostVotes = votes.indexOf(mostValue);
  
  return (
    <div>
      <Header title1 = {title1} />

      {anecdotes[selected]} 
      <br />

      has {votes[selected]} votes 
      <br />

      <button onClick={vote}> vote </button>
      <button onClick = {next} > next anecdote </button>
      
      <Header title2 = {title2} />
      {anecdotes[mostVotes]}
      <br />
      has {votes[mostVotes]} votes

    </div>
  )

}

export default App;

