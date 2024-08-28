'use strict'; 
//  inform the javascript engine that the code on this page uses strict rules

const express = require ("express");

// Constants
const PORT = 8989;
const HOST = "127.0.0.1";
const OS = require("os");
const ENV = "DEV";

const app = express();

app.get("/", (req, res)=>{  // listens for http://localhost:8989 to be called
    res.statuscode = 200;   // return a response.OK
    res.send(msg);
});

app.get("/test", (req, res)=>{
    res.statusCode = 200
    const msg = "Hello from /test Node.js!";
    res.send(msg);

});

app.listen(PORT, HOST)                                     // Console.log("Running on PORT" + PORT + " and HOST" + HOST); // conventional way to conctenate strings
console.log(`Running on http://${HOST}:${PORT}`);          // using template strings to concatenate strings