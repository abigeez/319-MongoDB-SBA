
// Load environment variables
import "./loadEnvironment.mjs";

const express = require("express");

const app = express();

import dotenv from 'dotenv';
dotenv.config();

console.log(process.env) 

const fs = require('fs');
const port = 3000;


app.listen(port, () =>  {

    console.log(`Server listening on port: ${port}.`)
});

app.listen(3000);

app.get('/',(req,res) => {

res.send();
});
