import { useState } from 'react'
import { useEffect } from 'react';

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


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


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


  return (
    <div>
      <h2>Phonebook</h2>
      <div> filter shown with: <input value={newFilter} onChange={handleFilterChange} /> </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameChange} /> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
      {filterPersons(persons, newFilter)
        .map(person => (<li key={person.name}> {person.name} {person.number} </li>))
      }
      </ul>
    </div>
  )

}

export default App
