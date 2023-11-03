import { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import AnecdoteList from "./components/AnecdoteList";
import Create from "./components/Create";
import About from './components/About';
import AnecdoteLists from './components/AnecdoteLists';
import Notification from './components/Notification';
import { useField } from "./hooks/index";


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

  const navigate = useNavigate();
  const [notification, setNotification] = useState("");
  const contentField = useField("text");
  const authorField = useField("text");
  const infoField = useField("text");

  const newValue = (data) => {
    setAnecdotes(anecdotes.concat(data));
    navigate("/");
    setNotification(`a new anecdote ${data.content} created!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);

    contentField.reset();
    authorField.reset();
    infoField.reset();
  };

  
  

  return (
    <div className='container'>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification = {notification} />
      <Routes>
        <Route path = "/anecdote/:id" element = { <AnecdoteLists anecdoteList = {anecdotes}
                                                                 setAnecdotes = { setAnecdotes }
                                                                 /> } />
        <Route path = "/create" element = { <Create newValue = { newValue }
                                                    anecdotes = { anecdotes }
                                            /> } 
        />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/" element = { <AnecdoteList anecdote = {anecdotes} /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;