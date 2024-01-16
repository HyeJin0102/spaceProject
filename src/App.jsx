import CharacterPlace from '@/components/letter/CharacterPlace';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [letters, setLetters] = useState(false);
  const addLetterHandler = ({ title, summary, from }) => {
    const newLetter = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      from
    };

    const updateLetter = [...letters, newLetter];
    setLetters(updateLetter);
  }

  return (
    <div className='App'>
      <header>
        <title>Space Project</title>
      </header>
      <section>
        <letterPlace letters={letters}>
          <CharacterPlace onAdd={addLetterHandler} />
          {/* <FriendPlace /> */}
        </letterPlace>
      </section>
    </div >
  )
}

export default App
