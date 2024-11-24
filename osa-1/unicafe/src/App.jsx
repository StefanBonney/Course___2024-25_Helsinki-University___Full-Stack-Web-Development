import { useState, useEffect } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
        <div>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {total}</li>
          <li>average {average}</li>
          <li>positive {positivePercentage} %</li>
        </ul>
        </div>
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
