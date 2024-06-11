const express = require("express");
const app = express();
//register view engine

const fs = require('fs');
const port = 3000;


app.listen(port, () =>  {

    console.log(`Server listening on port: ${port}.`)
});