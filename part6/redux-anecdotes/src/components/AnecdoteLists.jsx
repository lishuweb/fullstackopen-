import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AnecdoteLists = () => {
    const dispatch = useDispatch();

    const anecdotes = useSelector((state) => {
        state = JSON.parse(JSON.stringify(state));
        return state.anecdote.sort((val1, val2) => {
            return val2.votes - val1.votes;
        });
    });
    return(
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnecdoteLists;