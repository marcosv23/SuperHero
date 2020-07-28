const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app =express() ;
const port = 3333;
app.listen(3333,()=>{
  console.log(`backend is running at ${port} port`);
})

app.use(cors());
app.use(express.json());
app.use(routes);


