const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')

const app=express()
const port=3000

app.use(express.json())

app.get('/Bajaj_Finserv_Health_Challenge/bfhl',(req,res)=>{
    res.status(200).json({"operation_code":1})
})

app.post('/Bajaj_Finserv_Health_Challenge/bfhl',(req,res)=>{
    let newObj=req.body;
    let onlyLi=newObj.data;
    var onlyNumbers=onlyLi.filter(function(charis){
        if(charis.charCodeAt(0)>47 && charis.charCodeAt(0)<58){
            return charis
        }
    })
    var onlyAlpha=onlyLi.filter(function(charis){
        if((charis.charCodeAt(0)>64 && charis.charCodeAt(0)<91) ||
        (charis.charCodeAt(0)>96 && charis.charCodeAt(0)<123) ){
            return charis
        }
    })
    const sorted = [...onlyAlpha].sort((a, b) => {
        return a.localeCompare(b, undefined, {sensitivity: 'base'});
      });
    const highestChar=sorted.slice(-1)

    res.json({
        "is_success":true,
        "user-id":"Satvik_Tata_07112001",
        "email":"st4153@srmist.edu.in",
        "roll_number":"RA2011043010014",
        "numbers":onlyNumbers,
        "alphabets":onlyAlpha,
        "highest_alphabet":highestChar
    })
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})