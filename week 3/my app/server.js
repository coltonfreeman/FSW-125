//server.js
const express = require('express')
const app = express();
const { v4: uuidv4 } = require('uuid');

const recycledItems = require('./routes/recycledItems')

const itemsIntakeRouter = require('./routes/itemsIntake')



const PORT = 3000;

//Application Level Middleware
app.use(express.json()) // for parsin application/json


//routes
app.use('/newItems', itemsIntakeRouter);
app.use('/recycle', recycledItems);


// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})


