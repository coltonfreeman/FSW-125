import { Router } from 'express';
const todoRouter = Router();
import { v4 as uuidv4 } from 'uuid';


let todoExpress = [
    {
        name: "B.U. Articles",
        desc: "Read week 4 articles",
        isComplete: true,
        _id: uuidv4()
    },

    {
        name: "B.U. Videos",
        desc: "Watch week 4 videos",
        isComplete: true,
         _id: uuidv4()
    },

   {
        name: "B.U. Assignments",
        desc: "Catch up to week 4 assigments",
        isComplete: true,
        _id: uuidv4()
    },
    {
        name: "B.U. Projects",
        desc: "complete week 4 projects",
        isComplete: true,
        _id: uuidv4()
    },
    {
        name: "B.U. week4 homework",
        desc: "reach 100% for week4 in Cerego",
        isComplete: true,
        _id: uuidv4()
    }
]

todoRouter
.get('/', (_req, res) => {
    res.send(todoExpress)
})

.get('/:todoId' , (req, res) => {
  const todoId = req.params.todoId;
  const filteredTodos = todoExpress.filter(todo => todo._id === todoId);

  res.send(filteredTodos);
})

.post('/:todoId', (req, res) => {
    const newTodo = req.body; 
    newTodo._id = uuidv4()
    todoExpress.push(newTodo);

    console.log(todoExpress)

    res.send('You successfully ADDED a todo item. Congratulations!');
})

.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
  const todosIndex = todoExpress.findIndex(todo => todo._id === todoId);
  todoExpress.splice(todosIndex, 1)

  res.send('You successfully DELETED a todo item. Congratulations!')
})

.put('/:todoId', (req, res) => {
       const todoId = req.params.todoId;
  const todosIndex = todoExpress.findIndex(todo => todo._id === todoId);
  const updatedTodoList = Object.assign(todoExpress[todosIndex], req.body);

  res.send('You successfully ADDED a todo item. Congratulations!');
})



export default todoRouter;