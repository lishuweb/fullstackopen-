import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad;
    let average = props.good - props.bad / total;
    let positive = `${(props.good / total * 100)}%`;
        return (
            <div>
                <table>
                    <tbody>
                        <StatisticsLine text = "good  " value = {props.good} />
                        <StatisticsLine text = "neutral  " value = {props.neutral} /> 
                        <StatisticsLine text = "bad  " value = {props.bad} /> 
                        <StatisticsLine text = "total  " value = {total} /> 
                        <StatisticsLine text = "average  " value = {average} /> 
                        <StatisticsLine text = "positive  " value = {positive} />
                    </tbody>
                </table> 
            </div>
    )
}

export default Statistics;