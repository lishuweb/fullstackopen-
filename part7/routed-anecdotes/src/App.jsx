import { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
// import { BrowserRouter } from 'react-router-dom';
// import AnecdoteList from './components/AnecdoteList';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ]);
  
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu data = {anecdotes} 
            setAnecdotes = {setAnecdotes} 
      />
      <Footer />
    </div>
  );
};

export default App;