import { useState } from 'react'
import ImportedText from './components/imported-text/ImportedText'
import MainGame from './components/main-game/MainGame'
import './App.css'
import {FaHandRock} from 'react-icons/fa'

function App() {


  return (
    <div className="App">
      <div className='container'>

        <h1 className='heading'>
        TYPO <FaHandRock/>
      </h1>
      <ImportedText/>
      <MainGame/>
      </div>
    
    </div>
  )
}

export default App
