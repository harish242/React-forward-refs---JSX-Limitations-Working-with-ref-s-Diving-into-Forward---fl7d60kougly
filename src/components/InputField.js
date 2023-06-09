import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField=({kin,refi})=>{
  // const{kin}=props
  const HandleChange=(e)=>{
     kin(e.target.value)
  }
    return(
    <div>
      <input id="input" type="text"  ref={refi} onChange={HandleChange}/>
    </div>
    )
    }
export default InputField;