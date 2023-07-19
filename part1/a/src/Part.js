const Part = (props) => {
    console.log(props);
    return (
        <p>
            {/* {parts} {exercises}    */}
            {props.part} {props.exercises}
        </p>
    )
}   
export default Part;