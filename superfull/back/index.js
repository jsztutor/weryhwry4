const express = require('express')
const productRoutes = require('./routes/productRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes.js')
const cors = require('cors')
// const con = require("./db.js")
require('dotenv').config()
const app = express()
//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',productRoutes)
app.use('/category',categoryRoutes)



// con.query("select * from product",(error,data)=>{
//    if(!error){
//        console.log(data)
//    }
// })




const PORT= process.env.PORT || 4400
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`SIZ ${PORT} PORTA QOSHULDUNUZ`)
    }
})