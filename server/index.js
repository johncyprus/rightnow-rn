const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = 5000;

// parse application form-url encoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// enable routing on app
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))