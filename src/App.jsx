import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'


function App() {

  const phrasesRandom = getRandomElemArray(phrases).phrase
  const numberRandom = getRandomElemArray([1,2,3,4])

  const [quote, setQuote] = useState(phrasesRandom)   
  const [numberbg, setNumberBg] = useState(numberRandom)   
                        

  const bgStyle = {
    backgroundImage: `url(/img/fondo${numberbg}.png)`


  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote 
        phrase={quote}
        setQuote={setQuote}
        setNumberBg={setNumberBg}
        phrasesRandom = {phrasesRandom}
        
      />
    </div>
  );
}

export default App
