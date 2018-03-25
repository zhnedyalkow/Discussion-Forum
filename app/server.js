const express = require('express');

const app = express();

const data = require('./data/data');

const port = 3001;

require('./config/express').init(app);
require('./config/auth').init(app, data);

app.use((req, res, next) => {
    // res.locals.user = req.user || null;
    if (req.user) {
        res.locals.user = req.user.dataValues;
        delete res.locals.user.password;
    } else {
        res.locals.user = null;
    }
    return next();
});

require('./routes').init(app, data);

app.listen(port);
console.log(`App running at port: ${port}`);
