const express = require('express');
// const data = require('./data');
const app = express();
const port = 3001;

require('./config/express').init(app);
// require('./routes').init(app, data);
require('./routes').init(app);

app.listen(port);
console.log(`App running at port: ${port}`);