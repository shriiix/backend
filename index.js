// console.log("Chai aur code ")

require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('https://github.com/shriiix')
})

app.get('/loogin',(req,res)=>{
    res.send('<h1> please log in at chai aur code</h1>')
})

app.get('/youtube',(rep,res)=>{
    res.send('<h2> helloooo guys </h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})