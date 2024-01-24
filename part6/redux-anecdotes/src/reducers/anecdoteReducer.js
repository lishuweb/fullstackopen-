import getServices from "../services/anecdoteServices";
import { createSlice } from '@reduxjs/toolkit';

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

export const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: 'anecdotesSlice',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(action.payload);
    },
    addVote(state, action) {
      return state.map((anecdote) => 
        anecdote.id === action.payload ? {...anecdote, votes: anecdote.votes + 1} : anecdote
      );
    },
  },
});

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   };
// };

export const displayAnecdotes = () => {
  return async (dispatch) => {
    const anec2 = await getServices.getAll();
    dispatch(createNewAnecdote(anec2));
  }
};

export const createNewAnecdote = (addNewAnecdote) => {
  return async (dispatch) => {
    const anec = await getServices.createData(addNewAnecdote);
    dispatch(createNewAnecdote(anec));
  }
};

// const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state);
//   console.log('action', action);

//   return state;
// }

export const { createAnecdote, addVote } = anecdoteSlice.actions;
export default anecdoteSlice.reducers;
