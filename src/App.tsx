import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Game } from './pages/Game';
import { Setting } from './pages/Setting';
import { Leaders } from './pages/Leaders';


function App() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    
  }, [])
  
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Game/>} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Leaders' element={<Leaders/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
