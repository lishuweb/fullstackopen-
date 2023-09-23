const AnecdoteLists = ({ data }) => {
    return(
        <div>
            <h1>
                {data.content}
            </h1>
        </div>
    );
};

export default AnecdoteLists;