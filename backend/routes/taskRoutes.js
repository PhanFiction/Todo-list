const router = require('express').Router();
const taskController = require('../controller/taskController');

router.post('/create-task', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getSingleTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;