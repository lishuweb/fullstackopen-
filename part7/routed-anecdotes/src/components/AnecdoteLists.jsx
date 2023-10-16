const AnecdoteLists = ({ anecdoteSingle }) => {
    console.log(anecdoteSingle, "anecdotess");
    return(
        <div>
            <h2>This is a single note for {anecdoteSingle.id}</h2>
            <p>
                {anecdoteSingle.content}
            </p>
            <p>
                has {anecdoteSingle.votes} votes
            </p>
            <p>
                for more info see <a href='{anecdoteSingle.info}'>{anecdoteSingle.info}</a>
            </p> 
        </div>
    );
};

export default AnecdoteLists;