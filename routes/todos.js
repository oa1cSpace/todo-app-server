const express = require('express');
const router = express.Router();
const Todos = require('../models/TodoModel');
const moment = require('moment');
const todo_list = [];

router.get('/todos', (req, res) => {
    res.send(todo_list);
});

router.post('/todos', (req, res) => {
    const created_at = moment().add(3, 'hours').toDate();

    const todo_list = {
        ...req.body,
        created_at
    };
    todo_list.push(todo_list);
    Todos.forge().save(todo_list).then((model) => {
        res.send(model);
    });

});

router.delete('/todos/:id', () => {

});

module.exports = router;
