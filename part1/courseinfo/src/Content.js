import Part from './Part';

const Content = (props) => {
    return props.parts.map((prop, i) => (
        <Part part = {prop.name} exercises={prop.exercises} key = {i}/>
    ));
    
}
export default Content;
