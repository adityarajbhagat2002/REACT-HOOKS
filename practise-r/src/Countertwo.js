import React, { useReducer } from "react";

const initialstate = {
  firstcounter: 0,
  secondtcounter : 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state,  firstcounter: state.firstcounter + action.value };

    case "Decrement":
      return { ...state, firstcounter: state.firstcounter - action.value };
    case "Increment2":
      return { ...state, secondtcounter: state.secondtcounter + action.value };

    case "Decrement2":
      return { ...state, secondtcounter: state.secondtcounter - action.value };

    case "Reset":
      return initialstate;

    default:
      return state;
  }
};
function Countertwo() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      COUNTER1 - {count.firstcounter}<br />
      COUNTER2 - {count.secondtcounter}<br />


      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
        </button>
      <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
        Decrement 2
        </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "Reset", value: 1 })}>
        Reset
      </button>
    </div>
  );
}

export default Countertwo;
