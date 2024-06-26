const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(express.urlencoded({extended:false}))
const cors = require('cors')
app.use(cors())
const router = require('./apiRouter')
app.use('/api',router)
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})