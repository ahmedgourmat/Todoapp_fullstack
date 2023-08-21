const express = require('express')

const app = express()

const cors = require('cors')

const connectDB = require('./db/activate')

require('dotenv').config()

const routes = require('./routes/routers')

port = process.env.PORT 

app.use(express.json())

app.use(cors())

app.use( '/api/v2/tasks' , routes )





const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen( port , ()=>{
            console.log(`The Server Is Listening To The Port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()