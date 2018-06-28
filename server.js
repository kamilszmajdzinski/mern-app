const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/Items')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongodb

mongoose.connect(db)
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err))

app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})