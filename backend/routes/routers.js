const express = require('express')
const routes = express.Router()
const { getTasks , postTask , updateTask , deleteTask } =require('../controllers/controllers')



routes.route('/').get(getTasks).post(postTask)
routes.route('/:id').patch(updateTask).delete(deleteTask)


module.exports = routes