import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // STATE
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // HANDLE CHANGE
  const handleAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };
  // set votes to add count at same index anecdotes is at
  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  // MOST VOTES COMPONENT
  const MostVotedAnecdote = ({ anecdotes, votes }) => {
    const mostVoted = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(mostVoted);
  
    if (mostVoted === 0) return <p>No votes yet</p>;
  
    return (
      <div>
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>has {mostVoted} votes</p>
      </div>
    );
  };

  // set votes to display at same index anecdotes is at
  return (
    <div>
      <h2>Anecdote of the day</h2>

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;