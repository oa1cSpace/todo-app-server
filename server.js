const express = require('express');
const app = express();
const db = require('./models');
// const userRouters = require('./routes/users')
// const taskRoutes = require('./routes/tasks')

const bodyParser = require('body-parser');
const  dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Routers
app.all('/*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.json({message: 'SERVER IS UP!'});

});

// TODO check
// app.use('/users', userRouters(app, express));
// app.use('/tasks', taskRoutes(app, express));

require('./routes/tasks')(app, express);
require('./routes/users')(app, express);

app.listen(3000, function () {
    db.sequelize.sync();
});
