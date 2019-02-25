const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require("./api");

app.use(bodyParser.json());
app.use(api);

app.listen(3000, function () {
    console.log('Tvoya mamka listening on port 3000!');
});




