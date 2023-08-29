import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({setQuote, setNumberBg , phrasesRandom}) => {

  const handleRandomPhrase = () => {
    setQuote(phrasesRandom)
    setNumberBg(getRandomElemArray([1,2,3,4]))
  }
  return (

    <button className="container_btn" onClick={handleRandomPhrase}>ver otro</button>
  )
}

export default BtnQuote