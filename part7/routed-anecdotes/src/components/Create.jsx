// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = (
    {  content, author, info, setContent, setAuthor, setInfo, handleSubmit }) => {
  const navigate = useNavigate();

  
  
  

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input 
            label = "content"
            name='content' 
            value = {content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input 
            label = "author"
            name='author' 
            value = {author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input 
            label = "info"
            name='info'
            value = {info} 
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  )

};

export default Create;
