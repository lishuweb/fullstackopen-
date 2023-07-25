const Total = (props) => {
    
    const totalExercises = props.parts.map((part) => 
        part.exercises)
        .reduce((total, exercises) =>
            total + exercises
        ,0);

    return (
        <p>
            <strong>
                total of {totalExercises} exercises
            </strong>
        </p>
    )
}
export default Total;