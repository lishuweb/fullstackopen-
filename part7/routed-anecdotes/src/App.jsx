import { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Routes, Route, useMatch } from "react-router-dom";
import AnecdoteList from "./components/AnecdoteList";
import Create from "./components/Create";
import About from './components/About';
import AnecdoteLists from './components/AnecdoteLists';
import Notification from './components/Notification';


const App = ({newValue}) => {
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

  const [content, setContent] = useState();
  console.log(content, "contentssssssss");
  const [author, setAuthor] = useState();
  console.log(author, "author");
  const [info, setInfo] = useState();
  console.log(info, "info");

  const handleSubmit = (event) => {
    
    event.preventDefault();
    const newValue = {
      id : anecdotes.length + 1,
      content,
      author,
      info,
      votes : 0
    };
    setAnecdotes(anecdotes.concat(newValue));
    navigate("/");
  }

  const[notification, setNotification] = useState("");

  if(newValue)
  {
    setNotification("hello");
  }

  const match = useMatch("/anecdote/:id");
  const anecdoteSingle = match ? anecdotes.find((result) => result.id == Number(match.params.id)) : null;
  
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      
      <Routes>
        <Route path = "/anecdote/:id" element = { <AnecdoteLists anecdoteSingle = {anecdoteSingle} /> } />
        <Route path = "/create" element = { <Create setAnecdotes = {setAnecdotes}
                                                    anecdotes = {anecdotes}  
                                                    content = {content}
                                                    author = {author}
                                                    info = {info}
                                                    setContent = {setContent}
                                                    setAuthor = {setAuthor}
                                                    setInfo = {setInfo}
                                                    handleSubmit = {handleSubmit}
        /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/" element = { <AnecdoteList anecdote = {anecdotes} /> } />
      </Routes>
      <Notification notification = {notification}/>
      <Footer />
    </div>
  );
};

export default App;