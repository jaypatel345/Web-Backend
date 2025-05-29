require('dotenv').config()
const express=require("express");
const app=express();


app.get('/',(req,res) => {
    res.send("you get it");
});
app.get('/home',(req,res) => {
    res.send("you get it main folder");
});

app.listen(process.env.PORT ,() => {
    console.log(`Hello it's my first backend code ${port}`);
});
