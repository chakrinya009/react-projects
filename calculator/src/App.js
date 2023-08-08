import { useState } from "react";
import React from 'react'

function App() {

   const [cal,Setcal]=useState('')
   const [result,Setresult]=useState('')

   const ops=['+','-','*','/','.']

   function updateCal(value){

    if(
        ops.includes(value) && cal ===''||
        ops.includes(value) && ops.includes(cal.slice(-1))
    ){
        return;
    }

    Setcal(cal+value)

    if(!ops.includes(value)){
        Setresult(eval(cal+value).toString())
    }
   }

    function createDigits(){
        const digits=[];

        for(let i=1;i<10;++i){
            digits.push(<button key={i} onClick={()=>updateCal(i.toString())}>{i}</button>)
        }
        return digits;
    }

    const calculate=()=>{
      Setcal(eval(cal).toString())
    }

    const deleteLast=()=>{
        if(cal==''){
            return;
        }

        const value= cal.slice(0,-1)
        Setcal(value)
    }

  

  return (
    <div className="App">
        <div className="calculator">

            <div className="display">
               {result? <span>({result})</span> :''}
               {cal||'0'}
            </div>

            <div className="operators">
                <button onClick={()=>updateCal('+')}>+</button>
                <button onClick={()=>updateCal('-')}>-</button>
                <button onClick={()=>updateCal('*')}>*</button>
                <button onClick={()=>updateCal('/')}>/</button>
                <button onClick={deleteLast}>DEL</button>
             
            </div>

            <div className="digits">
               {createDigits()}
            <button onClick={()=>updateCal(0)}>0</button>
            <button onClick={()=>updateCal('.')}>.</button>
            <button onClick={calculate}>=</button>
            </div>
        </div>
    </div>
  )
}

export default App