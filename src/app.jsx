import { useState, useRef } from 'preact/hooks'
import './app.css'

export function App() {
  const [result, setresult] = useState(0)
  const inputRef = useRef(0)
  const resultRef = useRef(0)
  
  
  function add(){
    return(
    setresult(
      (result) => result + Number(inputRef.current.value)
    ))
  }
  const sub = () => {
    setresult((result) => result - Number(inputRef.current.value))
  }
  const divide = () => {
    setresult((result) => result / Number(inputRef.current.value))
  }
  const multiply = () => {
    setresult((result) => result * Number(inputRef.current.value))
  }
  const square = () => {let
    setresult((result) =>  (Number(inputRef.current.value)*Number(inputRef.current.value)))
  }
  const resetresult = () => {
    setresult((result) => 0)
  }
function resetall(inputRef, resultRef) {
    
    inputRef=0;
    resultRef=0;
    
    return setresult(result => 0)
  }


  return (
    <>
    <div>
      <div className="main">
        <div className="container">
         <h1>Calculator</h1>
         <h5>Ashutosh Tiwari</h5>
         <h4>Tools Used: React.js, HTML, CSS</h4></div>
         <div className="container"><div>
         <label htmlFor="int">Input:</label><input id="int" pattern='[0-9]' type="number" ref={inputRef} />
         <button onClick={resetresult}>Reset Result </button>
      <button onClick={resetall}>Complete Reset</button></div>
      <div className="result">
        <p ref={resultRef}><h1>{result}</h1></p>
     
     
      </div> </div>
      <div className="function">
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
        <button onClick={divide}>divide</button>
        <button onClick={square}>square</button>
        <button onClick={multiply}>multiply</button>
        </div>
      
    </div> 
    </div>
    </>
  )
}
