const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routers = require('./router/routers')
const app = express()
app.use(express.json())
app.use(cors())
const DB_URL = 'mongodb+srv://niad:Aroundeworld000!@cluster0.la2f2.mongodb.net/exam-T-02?retryWrites=true&w=majority&appName=Cluster0'
const PORT = 8080

app.use('/products',routers)


mongoose.connect(DB_URL).then(()=>{app.listen(PORT,()=>{console.log(`http://localhost:${PORT} | conneted!`);
})})