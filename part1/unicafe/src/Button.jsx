const Button = (props) => {
        console.log(props);
        return(
                <button onClick = {props.someFunction}>{props.text}</button>
            )                
    }
    
export default Button;