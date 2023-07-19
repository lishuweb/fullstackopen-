const Part = (part) => {
    console.log(part, 'hello');
    return (
        <div>
            {part.part.map((data, i) => 
                <p key = {i}>
                    {data.part} {data.exercise} 
                </p>
            )}
        </div>
    )
}   
export default Part;