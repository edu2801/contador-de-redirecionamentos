const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path')

async function connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/newLinks');
        console.log("Banco carregado");

    } catch (err) {
        console.log(err);
    }
} connection()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}`));