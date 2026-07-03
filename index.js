import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import express from "express";


dotenv.config({override : true});

//setting up the env variables
let SECRET = process.env.JWT_SECRET;
let PORT = process.env.PORT

//variables
let cookie = 'sexy-feet'

let app = express();

let signedToken = jwt.sign({ fruit : "musk-melons"}, SECRET);

app.get('/xyz',(req, res)=>{
    res.cookie(cookie, signedToken);
        res.send("pokemon!!");
})

app.get('/json',(req,res)=>{
    res.json(['a', 1 , false, {'a' : 'pokemon', b : ()=>{console.log("hello")}}])
})

app.get('/end',(req,res)=>{
    res.end();
})

app.get('/logout', (req, res) => {
    console.log("Reached here!!")
    res.clearCookie(cookie)
    res.status(222).end()
})

app.listen(PORT,()=>{
    console.log(`App is listening on PORT:${PORT}!!!`)
})


