//server.js
const express = require('express');
const app = express();
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const recycledItems = require('./routes/recycledItems')

const itemsIntakeRouter = require('./routes/itemsIntake')

const bookRouter = require('./routes/bookRouter')

const todoRouter = require('./routes/todoRouter')

const PORT = 3000;

//Application Level Middleware
app.use(express.json()) // for parsin application/json
app.use(morgan('dev'));


//routes
app.use('/newItems', itemsIntakeRouter);
app.use('/recycle', recycledItems);
app.use('/books', bookRouter);
app.use('/todoExpress', todoRouter);


// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})


