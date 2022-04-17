import { Router } from 'express';
const todosRouter = Router();
import { v4 as uuidv4 } from 'uuid';



let todos = [
    {name: "Morning Workout", description: "Do Kettlebell workout for 30 min", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "Complete Homework", description: "Complete homework and submit", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "Learn It's", description: "Complete learn it's before Saturday", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "Ready for next week", description: "Read course work for next week", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];

todosRouter
    .get('/', (_req, res) => {
        res.send(todos);
    })

    .get('/:itemId', (req, res) => {
        const todosId = req.params.itemId;
        const oneItem = todos.find(item => item._id === todosId);
        res.send(oneItem);
    })

    .get('/search/id', (req, res) => {
        const todosId = req.query._id;
        const filteredItems = todos.filter(item => item.id === todosId);
     
        res.send(filteredItems)
     })
     
    .post('/', (req, res) => {
        const newtodo = req.body;
        newtodo._id = uuidv4();
        todos.push(newtodo);
        console.log(todos);
        res.send(`Successfully added ${newtodo.name} to the list of recycled items`);
    })

   .delete('/:todosId',(req, res) => {
        const todosId = req.params.todosId;
        const todoIndex = todos.findIndex(item => item._id === todosId);
        todos.splice(todoIndex, 1);
        res.send(`Successfully deleted fron the list`);
    })

    .put('/:todosId',(req, res) => {
        const todosId = req.params.todosId;
        const todoIndex = todos.findIndex(item => item._id === todosId);
        Object.assign(todos[todoIndex], req.body);
        res.send(`Successfully updated the list`);

    })
export default todosRouter;