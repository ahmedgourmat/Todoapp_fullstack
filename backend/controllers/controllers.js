const Task = require('../db/schema')

const getTasks = async(req,res)=>{
    try {
        const data = await Task.find({})
        if(!data){
            res.status(404).send('Ther Is No Data Here')
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


const postTask = async(req,res)=>{
    try {
        const data = await Task.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
} 


const updateTask = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Task.findByIdAndUpdate( id , req.body )
        if(!data){
            res.status(404).send('Ther Is No Data Here To Update')
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


const deleteTask = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Task.findByIdAndDelete( id )
        if(!data){
            res.status(404).send('Ther Is No Data Here To Delete')
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}