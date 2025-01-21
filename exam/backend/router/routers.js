const express = require('express')

const {getAllTheDatas,getTheDataById,deleteDataById,addNewData} = require('../controllers/controllers')

const ruter = express.Router()

ruter.get('/',getAllTheDatas)
ruter.get('/:id',getTheDataById)
ruter.delete('/:id',deleteDataById)
ruter.post('/',addNewData)

module.exports = ruter