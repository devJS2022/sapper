import React, {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Game } from './pages/Game';
import { Setting } from './pages/Setting';
import { Leaders } from './pages/Leaders';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

function App() {
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    setModal(true)
  }, [])

  const startTheGame = () => {
    setModal(false)
}

  
  return (
    <div className="App">
      {modal && <Modal start={startTheGame}/>}
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Leaders' element={<Leaders/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
