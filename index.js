const express=require('express')
const Joi = require('@hapi/joi')
const route = require('./routes/api')
const dbconnection=require('./database/dbconnection')
const app = express()
dbconnection();
app.use(express.json());
app.use('/api/', route);
app.get('/',(req,res)=>{
  res.send('hello world')
});
app.listen(8888,(err)=>{
 console.log(err||'server listining at port 8888');
});