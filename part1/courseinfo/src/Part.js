const Part = (props) => {
    // console.log(parts, 'hello');
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}   
export default Part;