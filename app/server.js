const express = require('express');
// const data = require('./data');
const app = express();
const data = require('./routes/data');
const port = 3001;

require('./config/express').init(app);
require('./config/auth').init(app);
// require('./routes').init(app, data);
require('./routes').init(app, data);
require('./routes/auth.routes').init(app, data);

app.listen(port);
console.log(`App running at port: ${port}`);