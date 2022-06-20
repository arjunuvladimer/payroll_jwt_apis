const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/user.routes')

const app = express()
app.use(bodyParser.json())
app.use('/user',router)

app.listen(process.env.PORT, () =>{
    console.log(`Successfully Connected to the server`)
})

app.set('secretKey','jnlkjjjlkjlajdlksfal')

mongoose.connect(process.env.MONGOURI)
.then(() => {
    console.log("Successfully Connected to the Database")
})
.catch((error) => {
    console.log(error)
})