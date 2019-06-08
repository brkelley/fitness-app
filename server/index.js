const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const db = require('./database/database.js');

const routines = require('./routes/workout-routines.js');
const history = require('./routes/workout-history.js');

const port = 3000;

app.get('/routines', routines.routines);
app.get('/history', history.history);

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
