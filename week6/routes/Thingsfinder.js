const express = require('express');
const ThingFinderRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {name: 'apple', type: 'food', specific: "fruit", price: 20, _id: uuidv4()},
    {name: 'shirt', type: 'clothing', price: 40, _id: uuidv4()},
    {name: 'hot wheels', type: 'toy', price: 30, _id: uuidv4()},
    {name: 'hoodie', type: 'clothing', price: 15, _id: uuidv4()},
    {name: 'ramen', type: 'food', price: 10, _id: uuidv4()},
    {name: 'football', type: 'toy', price: 33, _id: uuidv4()},
    {name: 'limes', type: 'food', specific: "fruit", price: 8, _id: uuidv4()},
];

ThingFinderRouter
    .get('/', (_req, res) => {
        res.send(items);
    })

    .get('/:food', (req, res) => {
        const food = req.params.food;
        res.send(items.filter(item => item.type === food));
    })

    .get('/:clothing', (req, res) => {
        const clothing = req.params.clothing;
        res.send(items.filter(item => item.type === clothing));
    })

    .get('/:toy', (req, res) => {
        const toy = req.params.toy;
        res.send(items.filter(item => item.type === toy))
    })

    .get('/food/type', (req, res) => {
        const fruit = req.query.type;
        const filteredItems = items.filter(item => item.specific === fruit);
        res.send(filteredItems);
    })


module.exports = ThingFinderRouter;