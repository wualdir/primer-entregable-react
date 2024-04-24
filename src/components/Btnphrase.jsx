import GetRamdonNumber from "../utils/getRamdonNumber"
import quotes from '../data/phrases.json'
import  photosRamdon  from '../data/photos.json'


const Btnphrase = ({setphraseSelect,setbgSelected}) => {

const changePhrase = () =>{
   const indexPhrase= GetRamdonNumber(quotes.length)
    setphraseSelect(quotes[indexPhrase])
    setbgSelected(photosRamdon[GetRamdonNumber(photosRamdon.length)])
}

  return (
  
   <button  className="button-click" onClick={changePhrase}>Siguiente Frase</button>
  )
}

export default Btnphrase