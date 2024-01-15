import Modal from '@/components/ui/Modal';
import LetterForm from '@/components/letter/LetterForm'
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import imgcharicter from '@/constants/image/icons-human.png';

function App() {
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);
  return (
    <div className='App'>
      <header>
        <title>Space Project</title>
      </header>
      <section>
        <button onClick={openModal}>
          <img src={imgcharicter} alt="캐릭터 픽셀 그림" />
        </button>
        {isOpen && createPortal(
          <Modal onClose={closeModal}>
            <LetterForm onClose={closeModal}></LetterForm>
          </Modal>,
          document.body)}
      </section>
    </div>

    // <section>
    //   <LetterPlace />
    //   <CharacterPlace />
    //   <FriendPlace/>
    // </section>
  )
}

export default App
