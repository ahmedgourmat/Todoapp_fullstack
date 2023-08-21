import React, { useEffect, useState } from 'react'
import './app.css'
import List from '../List/List'
import axios from 'axios';

function App() {

const [ task , setTask ] = useState('')
const [ data , setData ] = useState([])
const [ update , setUpdate ] = useState(false)
const [ savedId , setId ] = useState('')


useEffect(()=>{
    axios.get('http://localhost:5000/api/v2/tasks')
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[data])


const postTask = ()=>{
    axios.post('http://localhost:5000/api/v2/tasks' , { task : task })
    .then((res)=>{
        console.log(res.data)
        setTask('')
        setUpdate(false)
    })
    .catch((err)=>{
        console.log(err)
    })
}


const updateTask = (id)=>{
    axios.patch(`http://localhost:5000/api/v2/tasks/${id}` , { task : task })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}



  return (
    <div className='container'>
      <h1>MERN FULL STACK PROJECT</h1>
        <h3>To Do List</h3>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <input 
                type='text' 
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder='Write Your Task'
            />
            <button className='button' onClick={update ? ()=>{updateTask(savedId)} : postTask}>{ update ? "Update Task" : "Add Task" }</button>
        </form>
        <ul>
            {
                data.map(elem=><List 
                    key={elem._id} 
                    id={elem._id} 
                    task={elem.task} 
                    update={update} 
                    setUpdate={setUpdate}
                    setId={setId} />)
            }
        </ul>
    </div>
  )
}

export default App
