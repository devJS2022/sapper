import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Game } from './pages/Game';
import { Setting } from './pages/Setting';
import { Leaders } from './pages/Leaders';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { IUser } from './interface/IUser';

function App() {
  const [modal, setModal] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>([])
  const [errorName, setErrorName] = useState<boolean>(false)
  const [errorLevel, setErrorLevel] = useState<boolean>(false)
  const [row, setRow] = useState<number>(0)
  const [col, setCol] = useState<number>(0)

  useEffect(() => {
    setModal(true)
  }, [])

  const newGame = (name: string, id: number) => {
    if (!name) {
      setErrorName(true)
      return
    }
    if (!id) {
      setErrorLevel(true)
      return
    }
    const user = {
      name: '',
      id: Date.now(),
    }

    setUsers(prev => [...users, user])
    setModal(false)
  }

  const levelTable = (sizeCol:number, sizeRow: number, time: number) => {
    setRow(sizeRow)
    setCol(sizeCol)
  }

  
  return (
    <div className="App">
      {modal && <Modal  newGame={newGame} errorName={errorName} errorLevel={errorLevel} levelTable={levelTable}/>}
      <Header />
      <main>
        <Routes>s
          <Route path='/' element={<Game col={col} row={row}/>} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Leaders' element={<Leaders/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
