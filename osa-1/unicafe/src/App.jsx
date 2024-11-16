import { useState, useEffect } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
