const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


let recycled = [
    {name: "Morning Workout", description: "Do Kettlebell workout for 30 min", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "Complete Homework", description: "Complete homework and submit", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "Learn It's", description: "Complete learn it's before Saturday", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "Ready for next week", description: "Read course work for next week", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];


recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycled);
    })

    .get('/:recycledId', (req, res) => {
        const recycleId = req.params.recycledId;
        const oneItem = recycled.find(item => item._id === recycleId);

        res.send(oneItem);
    })
    
    .get('/search/id', (req, res) => {
        const recycleIds = req.query._id;
        const filteredrecycled = recycled.filter(recycled=> recycled.id === recycleIds);
     
        res.send(filteredrecycled)
     })
     
    .post('/', (req, res) => {
        const newRecycled = req.body;
        newRecycled._id = uuidv4();
        recycled.push(newRecycled);

        res.send(newRecycled);
    })

   .delete('/:recycleID',(req, res) => {
        const recycleID = req.params.recycleID;
        const recycleIndex = recycled.findIndex(recycled => recycled._id === recycleID);
        recycled.splice(recycleIndex, 1);
        res.send(`Successfully deleted fron the list`);
    })

    .put('/:recycleID',(req, res) => {
        const recycleID = req.params.recycleID;
        const recycleIndex = recycled.findIndex(recycled => recycled._id === recycleID);
        Object.assign(recycled[recycleIndex], req.body);
        res.send(`Successfully updated the list`);

    })
module.exports = recycledItemsRouter;