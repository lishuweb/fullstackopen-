const Total = (props) => {
    const totalValue = props.parts.map((part) => 
        part.exercises)
        .reduce((total, exercises) =>
            total + exercises
        ,0);

    return (
        <p>Number of exercises {totalValue}</p>
    )
}
export default Total;