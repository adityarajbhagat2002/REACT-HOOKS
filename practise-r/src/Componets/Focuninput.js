import React ,{useEffect, useRef }from 'react'

function Focuninput() {
    const inputref= useRef(null)

    useEffect(()=>{
        inputref.current.focus()
    },[])
  return (
    <div>
        <input  ref={inputref}  type = "text"/>
    </div>
  )
}

export default Focuninput