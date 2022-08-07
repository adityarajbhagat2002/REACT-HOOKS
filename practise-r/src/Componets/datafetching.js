import React, {useState , useEffect} from 'react'
import axios  from 'axios'


function Datafetching() {
    const [post,setpost] = useState({})
    const [id ,setid]= useState(1)
    const  [idfrombuttonclick ,setodfrombuttonclick]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res=>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idfrombuttonclick])


    const handleclick =()=>{
        setodfrombuttonclick(id)
    }
 
    return (

    <div>

        <input type="text" value={id} onChange={e=>setid(e.target.value)} />
        <button type="button" onClick={handleclick}>Fetch post</button> 

        <div>{post.title}</div>
       {/* <ul>
        {
          post.map(post=>   <li key ={post.id}>{post.title} </li>)
        }
       </ul> */}

    </div>
  )
}

export default Datafetching