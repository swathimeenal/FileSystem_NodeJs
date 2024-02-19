const PORT=8000
const fs= require('fs')
const express= require('express')
const app=express()

app.use('/',(req,res)=>{
  try {
    let today=new Date().getTime()
    fs.writeFileSync(`Current_TimeStamp/${today}.txt`,`${today}`,'utf8')
    let data=fs.readFileSync(`Current_TimeStamp/${today}.txt`,'utf8')
    res.send(data)
    } 
  catch (error) {  
  }
})
app.listen(PORT,()=>console.log(`Server listening at http://localhost:${PORT}`))