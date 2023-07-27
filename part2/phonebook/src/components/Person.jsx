const Person = ({person}) => {
    return (
        <>
            {person.map((per) => (
                <p key={per.name}>
                    {per.name} {per.number}
                </p>
            ))}
        </>
    )
}

export default Person;