import React from 'react'
import axios from 'axios';


function List({ id , task , update , setUpdate , setId}) {

const deletePost = (id)=>{
    axios.delete(`http://localhost:5000/api/v2/tasks/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const editTask = ()=>{
    setUpdate(true)
    setId(id)
}

  return (
    <>
        <li>
            {task}
            <div className="button-container">
                <button className='button' onClick={editTask}>Edit</button>
                <button className='button' onClick={()=>{deletePost(id)}}>Delete</button>
            </div>
        </li>
    </>
  )
}

export default List
