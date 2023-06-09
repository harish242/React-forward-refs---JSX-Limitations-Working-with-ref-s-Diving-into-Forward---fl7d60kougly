import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here 
const[values,setText]=useState('')
const newRef=useRef(null)
const newsRef=useRef(null)
const settingValue=()=>{
   newsRef.current.innerHTML=values
}
const focusInput=()=>{
  newRef.current.focus()
}

 
  return (
    <div>
    <InputField  refi={newRef}  type="text" kin={setText}/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" ref={newsRef}></textarea>

    </div>
  );
}


export default App;
