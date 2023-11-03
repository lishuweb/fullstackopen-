// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
// import styled from 'styled-components';

const Create = ({ newValue, anecdotes }) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    
    event.preventDefault();
    newValue({
      id : anecdotes.length + 1,
      content : content.value,
      author : author.value,
      info : info.value,
      votes : 0
    });
    navigate("/");
  };

  const handleReset = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  const style = {
    padding : 5,
    margin : 5
  };

  const inputStyle = {
    margin : 2 
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input style={inputStyle}
            type = {content.type} 
            value = {content.value}
            onChange = {content.onChange}
            onReset = {content.reset}
          />
        </div>
        <div>
          author
          <input style={inputStyle}
            type = {author.type} 
            value = {author.value}
            onChange = {author.onChange}
            onReset = {author.reset}
          />
        </div>
        <div>
          url for more info
          <input style={inputStyle}
            type = {info.type} 
            value = {info.value}
            onChange = {info.onChange}
            onReset = {info.reset}
          />
        </div>
        <button type="submit" style={style}>create</button>
        
        <button type="reset" style={style} onClick={handleReset}>reset</button>
      </form>
    </div>
  )

};

export default Create;
