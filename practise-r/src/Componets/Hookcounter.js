import React, { useEffect } from 'react'
import {useState} from 'react';


function Hookcounter() {
  const [count,setcount] =useState(0)
  const [name,setname]=useState('')

  useEffect(()=>{
    console.log("useEffect-updating document title")

    document.title=`you clicked ${count} times`
    
  },[count])
  return (
    <div>
      <input type="text" value={name} onChange={e=>setname(e.target.value)} />
        <button onClick={()=>setcount(count+1)}>click me {count} </button>
    </div>
  )
}

export default Hookcounter