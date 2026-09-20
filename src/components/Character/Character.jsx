import { useState } from 'react'
import './Character.css'

function Character({ character }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className={isFlipped ? 'character-image flipped' : 'character-image'}
        onClick={() => setIsFlipped((prev) => !prev)}
      />
      <h2>{character.name}</h2>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
    </div>
  )
}

export default Character
