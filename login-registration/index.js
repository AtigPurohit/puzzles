var express = require("express")
var mongoose = require("mongoose")
var dotenv = require("dotenv")
const linkDatabase = require('./settings/db')
dotenv.config()
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.json('running')
})

linkDatabase()

app.listen(port, () => {
    console.log('Node Js connect ho gaya vai')
})

const user = { name: 'Atig Purohit', email: 'itsthechamp0074@gmail.com.com', password: '8017', score: "" };
users.insertOne(user, (err, result) => {
  if (err) {
    console.error('Error inserting user:', err);
    return;
  }
  console.log('User inserted successfully');
});



