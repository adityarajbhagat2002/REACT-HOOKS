import React ,{useState,useMemo} from 'react'

function Countermemo() {

    const [countone,setcounterone]= useState(0)
    const [counttwo,setcountertwo]= useState(0)

    const incrementone=()=>{
        setcounterone(countone +1)
    }
    const incrementtwo=()=>{
        setcountertwo(counttwo +1)
    }
    

    const isEven = useMemo(()=>{
        let i =0
        while (i  <200000000) i++
        return countone % 2 === 0 
    },[countone])
  return (
    <div>
        <div>
            <button onClick={incrementone}>CLICK ONE - {countone}</button>
            <span> {isEven ? "even" : " odd "}</span>
        </div>
        <div>
            <button onClick={incrementtwo}>CLICK TWO - {counttwo}</button>
        </div>
    </div>
  )
}

export default Countermemo