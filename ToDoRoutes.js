const { Router } = require('express');
const { getToDo, saveToDo, deleteToDo, editToDo } = require('./ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/saveToDo', saveToDo);
router.post('/deleteToDo', deleteToDo);
router.put('/editToDo', editToDo);

module.exports = router;