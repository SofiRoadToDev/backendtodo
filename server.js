require('dotenv').config()
const express= require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const db=require('./models')
const path=require('path')

const port=process.env.PORT || 3000

app.use('/api',express.static('uploads'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit:'25mb',extended: true }))

app.use('/api',require('./src/routes/todoRouter'))


db.sequelize.sync({force:false})


app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Ha ocurrido un error en el servidor '+err)
})




app.listen(port,()=>{
    console.log(`Server running on port: ${port || 8000}`);
})