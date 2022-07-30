const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()

const postRoute = require('./routes/posts')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/posts', postRoute)

//routes
app.get('/', (req, res) => {
    res.send("home")
})

//mongoose
mongoose.connect(process.env.DB_CONNECTION, () => {

    console.log("connected to db")

})


app.listen(3006)









