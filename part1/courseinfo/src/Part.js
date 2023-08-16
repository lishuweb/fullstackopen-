const Part = (props) => {
    console.log(props, 'hello');
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}   
export default Part;