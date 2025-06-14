import express from 'express';
import dotenv from 'dotenv';
import http, { createServer } from 'node:http';
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT;

app.set(PORT);
const server =http.createServer(app);


server.listen(PORT,(req,res)=>{
    console.log(req);
    console.log(`Server running on port ${PORT}`);
});
console.log("This runs first second");
