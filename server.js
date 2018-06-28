const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongodb

mongoose.connect(db)
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})