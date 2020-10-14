const express = require('express')

const app = express()

const {config}=require('./config')

app.get('/',(req,res)=>{
  res.send("Hello World")
})

const vale = {
  name:'Valentina',
  age: 20
}

app.get('/json',(req,res)=>{
  res.json(vale)
})

console.log(config)

app.listen(config.port,()=>{
  console.log(`Listening http://localhost:${config.port}`)
})