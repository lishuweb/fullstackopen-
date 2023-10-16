import { Link } from "react-router-dom";

// import AnecdoteLists from "./AnecdoteLists";
// import { useState } from "react";

const Menu = () => {

  const padding = {
    paddingRight: 5,
  };

  // const match = useMatch("/anecdotes/:id");
  // const anecdote = match ? notes.find((anecdote) => anecdote.id == match.params.id) : null;

  return(
    
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>
      </div>
  );
};

export default Menu;