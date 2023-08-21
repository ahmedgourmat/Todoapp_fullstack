const express = require('express')

const app = express()

const cors = require('cors')

const connectDB = require('./db/activate')

require('dotenv').config()

const routes = require('./routes/routers') 

app.use(express.json())

app.use(cors())

app.use( '/api/v2/tasks' , routes )





const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen( process.env.PORT , ()=>{
            console.log(`The Server Is Listening To The Port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()