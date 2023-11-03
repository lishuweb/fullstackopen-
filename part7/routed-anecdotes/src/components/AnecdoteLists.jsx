import { useMatch } from "react-router-dom";

const AnecdoteLists = ({ anecdoteList, setAnecdotes }) => {
    console.log(anecdoteList, "anecdotess");

    const match = useMatch("/anecdote/:id");
    const anecdoteSingle = match ? anecdoteList.find((result) => result.id == Number(match.params.id)) : null;

    const id = anecdoteSingle.id;

    const handleVote = () => {
        const voted = {
            ...anecdoteSingle,
            votes: anecdoteSingle.votes + 1,
        };
        setAnecdotes(anecdoteList.map((val) => {
            val.id === id ? voted : val
        }))
    };

    return (
        <div>
            <h2>This is a single note for {anecdoteSingle.id}</h2>
            <p>
                {anecdoteSingle.content}
            </p>
            <p>
                has {anecdoteSingle.votes} votes
                <button onClick={handleVote}>vote</button>
            </p>
            <p>
                for more info see <a href='{anecdoteSingle.info}'>{anecdoteSingle.info}</a>
            </p>
        </div>
    );
};

export default AnecdoteLists;