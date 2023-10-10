import { BrowserRouter, Routes, Route, Link, useMatch } from "react-router-dom";
import AnecdoteList from "./AnecdoteList";
import Create from "./Create";
import About from './About';
import AnecdoteLists from "./AnecdoteLists";
// import { useState } from "react";

const Menu = ({ data, setAnecdotes }) => {

  const padding = {
    paddingRight: 5
  };

  // const match = useMatch("/anecdotes/:id");
  // const anecdote = match ? notes.find((anecdote) => anecdote.id == match.params.id) : null;

  return(
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>
      </div>

      <Routes>
        <Route path = "/" element = { <AnecdoteList data = {data} /> } />
        
        <Route path = "/anecdote/:id" element = { <AnecdoteLists data = {data} /> } />
        <Route path = "/create" element = { <Create setAnecdotes = {setAnecdotes} /> } />
        <Route path = "/about" element = { <About /> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Menu;