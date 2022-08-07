import React, { useReducer } from 'react'
import axios from 'axios'

const initialstate= {
    loading : true,
    error: '',
    post : {}
}

const reducer=(state , action )=>{
    switch(action){
        case 'Fetch_sucess':
            return {
                loading :false,
                error : '',
                post : action.payload
            }

            case 'Fetch_error' :
                return {
                    loading : false ,
                    error : 'Something went wrong ',
                    post : {}
                }

                default :
                return state

    }

}
function Datafetchingtwo() {
   const [state,dispatch]= useReducer(reducer , initialstate)

   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(res=>{
        dispatch({type : 'Fetch_sucess', payload : res.data})
        
    })
    .catch(error=>{
       dispatch({type : 'Fetch_error'})

    })

},[])


  return (
    <div>
        {
            loading ? 'loading' : post.title
        }
        {error ? error : null}
    </div>
  )
}

export default Datafetchingtwo