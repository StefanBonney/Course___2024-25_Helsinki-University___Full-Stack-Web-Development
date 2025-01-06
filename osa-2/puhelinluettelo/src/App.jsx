import { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '04012341230' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameChange} /> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
