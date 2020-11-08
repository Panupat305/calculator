import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [detail, setDetail] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e){
 // const operator = ["+", "-", "*", "/"]
  var text = e.target.name;

  console.log(text);
  console.log("result-1 "+result.substr(-1));
  console.log("result "+result);


  if(result.substr(-1) == "+" || result.substr(-1) == "-"  || result.substr(-1) == "*"  || result.substr(-1) == "/"){
    if(text == "+" || text == "-"|| text == "*"|| text == "/"){
      text = "";
    }
    else{
      setResult(result.concat(e.target.name));
    }
  }
  else{
    setResult(result.concat(e.target.name));
  }
    
  }
  function clear(){
    setResult("");
    setDetail("");
  }
  function calculate(){
    
    try{
      setResult(eval(result).toString());
      setDetail((result).toString()+" =");
    }catch (error){
      setResult("Error")
    }
  }

  return (
    <div className="cal-app">
      <from>
        <input className="textdetail" type="text" value={detail}/>
        <input className="textinput" type="text"value={result} ref={inputRef}/>
      </from>

      <div className="keypad">
        <button onClick={clear} id="clear">CE</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="/" onClick={handleClick}>/</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button className="btn-sum" name="=" onClick={calculate}>=</button>
        <button name="+" onClick={handleClick}>+</button>
    
      </div>

    </div>
  );
}

export default App;
