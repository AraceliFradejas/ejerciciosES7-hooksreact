import { useEffect, useState } from 'react'
import Character from './components/Character/Character'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const [characters, setCharacters] = useState([])

  // Array de dependencias vacío: la petición se hace una única vez, al montar el componente
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error al pedir los personajes:', error))
  }, [])

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <p>Haz click en una imagen para darle la vuelta</p>
      </header>
      <main className="character-grid">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </main>
    </>
  )
}

export default App
