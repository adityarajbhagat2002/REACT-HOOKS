import React, {useState} from 'react'


function Hookcounterfour() {

    const[items,setitems]= useState([])

    function additem(){
        setitems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10) +1

        }])
        
    }
  return (
    <div>
        <button onClick={additem}>add a number </button>
        <ul>
            {items.map(item=>(
                <li key={items.id}>{item.value}</li>
            ))}
        </ul>


    </div>
  )
}

export default Hookcounterfour