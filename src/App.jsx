
import { useState } from 'react'
import './App.css'
import  quotes  from './data/phrases.json'
import  photosRamdon  from './data/photos.json'
import GetRamdonNumber from './utils/getRamdonNumber'
import Phrase from './components/Phrase'
import Btnphrase from './components/Btnphrase'
function App() {
  
  const indeRamdon= GetRamdonNumber(quotes.length)

  const [phraseSelect, setphraseSelect] = useState(quotes[indeRamdon])

  const [bgSelected, setbgSelected] = useState(photosRamdon[GetRamdonNumber(photosRamdon.length)])

 const photosStyle = {
  backgroundImage: `url(/imagenes/fondo${bgSelected}.png)`
 }

  return (
   
       <div className='main'  style={photosStyle}> 
        <h1 className='main_title'>Galleta de la Fortuna</h1> 
      <article className='main-content'>
       <Phrase phraseSelect={phraseSelect} 
       />
       <Btnphrase
       setphraseSelect={setphraseSelect}
       setbgSelected={setbgSelected}
       />
       </article>
      </div>
  )
}

export default App
