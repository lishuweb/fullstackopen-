// import { useState } from "react";

const Notification = ({ notification }) => {
    console.log(notification, "notificationnnnnnnnnnn")
    // const [notification, setNotification] = useState('');

    return notification ? 
    <div >
        { notification }
    </div> : null;
};

export default Notification;

// const addNew = (anecdote) => {
//     //         anecdote.id = Math.round(Math.random() * 10000);
//     //         setAnecdotes(anecdotes.concat(anecdote));
//     //     }
    
//     //     const anecdoteById = (id) =>
//     //         anecdotes.find(a => a.id === id)
    
//     //     const vote = (id) => {
//     //         const anecdote = anecdoteById(id)
    
//     //         const voted = {
//     //         ...anecdote,
//     //         votes: anecdote.votes + 1
//     //         }
    
//     //         setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
//     //     };