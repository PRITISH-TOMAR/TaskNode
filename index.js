const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const {connectToMongoDB} = require("./Connection/Connect")

const  userRoute  = require('./Routes/UserRoute')



//....................................
//MongoDB Connect
const dotenv = require('dotenv')
dotenv.config({ path: '.env' });

connectToMongoDB(process.env.MONGO_URL)

//.....................................


app.use(express.json())   
app.use(express.static(path.resolve("./public")))

//......................................


app.get('/ping', (req, res)=>
{
    res.json({ ping: "Hello from the Server !"})
})

app.use('/', userRoute)



app.listen(PORT, ()=> console.log(`Running Server at ${PORT}`))