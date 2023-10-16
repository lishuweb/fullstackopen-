import { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Routes, Route, useMatch } from "react-router-dom";
import AnecdoteList from "./components/AnecdoteList";
import Create from "./components/Create";
import About from './components/About';
import AnecdoteLists from './components/AnecdoteLists';
import Notification from './components/Notification';


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

  const [notification, setNotification] = useState("");

  const match = useMatch("/anecdote/:id");
  const anecdoteSingle = match ? anecdotes.find((result) => result.id == Number(match.params.id)) : null;
  
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification = {notification} setNotification = {setNotification}/>
      <Routes>
        <Route path = "/anecdote/:id" element = { <AnecdoteLists anecdoteSingle = {anecdoteSingle} /> } />
        <Route path = "/create" element = { <Create setAnecdotes = {setAnecdotes}
                                                    anecdotes = {anecdotes} /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/" element = { <AnecdoteList anecdote = {anecdotes} /> } />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;