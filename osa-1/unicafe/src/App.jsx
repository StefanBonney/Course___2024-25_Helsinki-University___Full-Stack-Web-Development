import { useState, useEffect } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  console.log("Statistics - Total Feedback:", total);
  console.log("Statistics - Average Feedback:", average);
  console.log("Statistics - Positive Feedback Percentage:", positivePercentage)

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positivePercentage} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log('good value before set state:', good);
    setGood(good + 1);
  };
  useEffect(() => {console.log('Updated good value:', good);}, [good]);

  const handleNeutral = () => {
    console.log('neutral value before set state:', neutral);
    setNeutral(neutral + 1);
  };
  useEffect(() => {console.log('Updated neutral value:', neutral);}, [neutral]);

  const handleBad = () => {
    console.log('bad value before set state:', bad);
    setBad(bad + 1);
  };
  useEffect(() => {console.log('Updated bad value:', bad);}, [bad]);


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
