import React, { useState ,useEffect} from 'react'
import './imported-text.css'
const ImportedText = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [text,setText]=useState(null)
    
   async function onTextChangeHandler(){
   const response= await fetch('https://typo-ef308-default-rtdb.firebaseio.com/data.json');
   const data=await response.json()
   const keys = Object.keys(data);
   const randomKey = keys[Math.floor(Math.random() * keys.length)];
   const randomValue = data[randomKey];
    setText(randomValue)
    }

useEffect(()=>{
  onTextChangeHandler()
},[])
  
  return (
    <section>

  
      {   <p className='imported-text'>
      {text}
        </p>}
        <button className='btn-change' onClick={onTextChangeHandler}>
            Change Text
        </button>
   
    </section>
  )
}

export default ImportedText
