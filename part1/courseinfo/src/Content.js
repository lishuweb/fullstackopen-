import Part from './Part';

const Content = ({arr}) => {
    console.log(arr)
    return (
        <div>
            <Part  part = {arr} />   
        </div>
    )
}
export default Content;
