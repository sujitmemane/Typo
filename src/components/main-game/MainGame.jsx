import React, { useEffect, useRef, useState } from 'react'
import './main-game.css'
import  {AiFillClockCircle} from 'react-icons/ai'
import {RiNumbersFill } from 'react-icons/ri'
import Confetti from 'react-confetti'
const MainGame = () => {
const [isStarted,setIsStarted]=useState(false)
const [textInput,setTextInput]=useState('')
const [wordCount,setWordCount]=useState(0)
const [timeRemaning,setTimeRemaning]=useState(60)
const [isOver,setIsOver]=useState(false)
const inputRef=useRef()

function textChangeHandler(event){
  const {value}=event.target
  setTextInput(value)
}

function countWords(text){
  const totalWords=text.trim().split(' ').length
  setWordCount(totalWords)
}


useEffect(()=>{
  if(isStarted &&  timeRemaning>0){
    setTimeout(()=>{
      setTimeRemaning(prev=>prev-1)
    },1000)

  }
  else if(timeRemaning===0){
    countWords(textInput)
    setIsStarted(false)
    setIsOver(true)
  
  }
},[timeRemaning,isStarted])

function startGameHandler(){
  setTimeRemaning(60)
  setIsStarted(true)
  setTextInput('')
  setWordCount(0)
  setIsOver(false)
  inputRef.current.disabled = false
  inputRef.current.focus()
}
  return (
    <section>
      <textarea
      ref={inputRef}
      onChange={textChangeHandler}
      value={textInput}
      disabled={!isStarted}
      />
      <div className='main-box'>
        <h1 className='main-h1'>
          Timer <AiFillClockCircle/> : {timeRemaning} s
        </h1>
        <h1 className='main-h1'> 
          Word Count <RiNumbersFill/> : {wordCount} w/m
        </h1>        
      </div>
      <button className='btn-change' onClick={startGameHandler} disabled={isStarted}>
        Start Game
      </button>

   

      {
      isOver && <p className='result'> Your Speed is {wordCount} Words/Minute </p>

      }
   {
    isOver && <Confetti></Confetti>
   }
    </section>
  )
}

export default MainGame
