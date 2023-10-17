const router = require('express').Router();
const taskController = require('../controller/taskController');

router.post('/create-task', taskController.createTask);
router.get('/today-task', taskController.getTodayTasks);
router.get('/weekly-task', taskController.getWeekTasks);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getSingleTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;