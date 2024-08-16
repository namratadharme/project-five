import React, { useEffect, useState } from "react";
import './checknumbers.css';


function Checknumber(){
     const [number1, setNumber1] = useState(0)
     const [number2, setNumber2] = useState(0)
     const [sum, setSum] = useState('')

     function getNumber1(event){
           setNumber1(event.target.value)
     }

     function getNumber2(event)
     {
           setNumber2(event.target.value)
     }

     function addNumbers(){
           setSum(parseInt(number1)+parseInt(number2))
           
     }
     
    useEffect(()=>{
        if((parseInt(number1)+parseInt(number2))%2==0){
            setSum("Even")
        }
        else{
            setSum("Odd")
        }
    },[number1, number2])


    return(
        <>
        <div id="container">
        <h1>Check a Number is Even Or Odd</h1>
        <input className="inputNumber" type="number" onChange={getNumber1}></input>
        <input className="inputNumber" type="number" onChange={getNumber2}></input>
        <p>{parseInt(number1)+parseInt(number2)} {sum}</p>
        </div>
        </>
    )
}

export default Checknumber