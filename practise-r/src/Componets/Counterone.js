import React, {useReducer} from 'react'



const initialstate = 0
const reducer = (state,action)=>{
    switch(action){
        case "Increment" :
            return state +1 

            case "Decrement" :
                return state -1

                case "Reset" :
                    return initialstate

                    default :
                    return state
    }

}
function Counterone() {

    const [count ,dispatch]= useReducer(reducer ,initialstate)
  return (
    <div>
        COUNT -{count}
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
    </div>
  )
}

export default Counterone