
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
function Counterthree() {

    const [count ,dispatch]= useReducer(reducer ,initialstate)
    const [counttwo, dispatchtwo]= useReducer(reducer,initialstate)
  return (
    <div>
        <div>

        COUNT  1-{count}<br />
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
        </div>
        COUNT 2 -{counttwo}<br />
        <button onClick={()=>dispatchtwo("Increment")}>Increment</button>
        <button onClick={()=>dispatchtwo("Decrement")}>Decrement</button>
        <button onClick={()=>dispatchtwo("Reset")}>Reset</button>

    </div>
  )
}

export default Counterthree