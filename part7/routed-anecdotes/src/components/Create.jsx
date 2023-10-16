import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";

const Create = ({ anecdotes, setAnecdotes, notification, setNotification }) => {
  const navigate = useNavigate();

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
      votes : 0,
      
    };
    setAnecdotes(anecdotes.concat(newValue));
    navigate("/");
    if(newValue)
    {
      setNotification("hello");
    }
    console.log(notification, "notification");
  }

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
