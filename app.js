import express from 'express';
import dotenv from 'dotenv';
import http, { createServer } from 'node:http';
import cors from 'cors';

const app=express();


app.use(express.json());
app.use(cors);


app.get('/',(req,res)=>{
    res.send("This is cool.")
    console.log("Everything is working fine.");
});

app.post('/throw',(req,res)=>{
    res.send(req.body);
});

export default app;