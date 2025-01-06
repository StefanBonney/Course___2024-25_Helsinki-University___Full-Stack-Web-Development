import { useState } from 'react'
import { useEffect } from 'react';



//===========================================================[Filter]
const FilterField = ({ filterValue, onChange }) => (
  <div>
    filter shown with: <input value={filterValue} onChange={onChange} />
  </div>
);

//===========================================================[PersonForm]
const PersonForm = ({ onSubmit, nameValue, numberValue, onChangeName, onChangeNumber }) => (
  <form onSubmit={onSubmit}>
    <div>name: <input value={nameValue} onChange={onChangeName} /></div>
    <div>number: <input value={numberValue} onChange={onChangeNumber} /></div>
    <div><button type="submit">add</button></div>
  </form>
);

//===========================================================[PersonsList]
const PersonsList = ({ persons }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {persons.map(person => (
      <li key={person.name}>
        {person.name} {person.number}
      </li>
    ))}
  </ul>
);

//===========================================================[App]
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  // debug: state after update (post-render)
  //useEffect(() => {
  //  console.log('Current state:', { persons, newName, newNumber });
  //}, [persons, newName, newNumber]);


  const handleNameChange = (event) => {setNewName(event.target.value)}
  const handleNumberChange = (event) => {setNewNumber(event.target.value)}
  const handleFilterChange = (event) => {setNewFilter(event.target.value)}


  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
      if (existingPerson) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    const newPerson = { 
      name: newName, 
      number: newNumber 
    }
    // debug: state after update (form-submission)
    //console.log('new person:', newPerson)
    //console.log('new persons list:', [...persons, newPerson])
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const filterPersons = (persons, filter) => {
    if (!filter) 
      return persons
    return persons.filter(person => 
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //###########################################################################################[RETURN]
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterField filterValue={newFilter} onChange={handleFilterChange} /> 
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} nameValue={newName} numberValue={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <PersonsList persons={filterPersons(persons,newFilter)} />
    </div>
  )

}

export default App
