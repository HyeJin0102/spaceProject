import { useState } from 'react';
import './App.css';
import imgcharicter from './constants/image/icons-human.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
    <div>
      <img src={imgcharicter} alt="캐릭터 픽셀 그림"/>
    </div>
    </body>

    // <section>
    //   <LetterPlace />
    //   <CharacterPlace />
    //   <FriendPlace/>
    // </section>
  )
}

export default App
