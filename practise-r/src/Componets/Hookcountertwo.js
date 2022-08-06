import React ,{useState} from 'react'

function Hookcountertwo() {

    const initialCount=0
    const [count ,setcount]=useState(initialCount)
  return (
    <div>
        count : {count}
        <button onClick={()=>setcount(initialCount)}>RESET</button>
        <button onClick={()=>setcount(count+1)}>INCREMENT</button>
        <button onClick={()=>setcount(count-1)}>DECREMENT</button>

    </div>
  )
}

export default Hookcountertwo