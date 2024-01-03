import React from "react";
import { useSelector } from "react-redux";


const Anecdotes = () => {
    const anecdote = useSelector((state)=> {
        state = JSON.parse(JSON.stringify(state));
        return state.anecdote.sort((val1, val2) => {
            return val2.votes - val1.votes;
        })
    })
}