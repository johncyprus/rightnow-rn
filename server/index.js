const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = 5000;

// test to see if process.env is  reading .env file correctly
if (dotenv.error) {throw dotenv.error};

// parse application form-url encoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// enable routing on app
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))