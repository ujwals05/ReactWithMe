
import  style from './App.module.css'
import DisplayInput from './components/DisplayInput'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {

  let [currentVal,getValue] = useState([]);

  let handleButton = (e) => {
    let newElement = e.target.value;
    if(newElement === "C"){
      getValue(" ");
    }else if(newElement === "="){
      let ans = eval(currentVal);
      getValue(ans)
    }else if(newElement === "DEL"){
      getValue(currentVal.slice(0,-1));
    }else if(newElement ==="RAN"){
      let ran = currentVal+Math.floor(Math.random()*10)+1;
      getValue(ran);
    }else if(newElement ==="R"){
      let ans = Math.floor(currentVal);
      getValue(ans);
    }else{
      let passElement = currentVal+newElement;
      getValue(passElement);
    }
  }
  return (
    <>
      <div className={style.page}>
        <div className={style.mainContent}>
          <DisplayInput currentVal = {currentVal} /> 
          <Buttons handlePress = {handleButton} />
        </div> 
      </div>
    </>
  )
}

export default App
