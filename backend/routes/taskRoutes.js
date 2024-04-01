const router = require('express').Router();
const taskController = require('../controller/taskController');

router.post('/create-task', taskController.createTask);
router.get('/daily-task', taskController.getTodayTasks);
router.get('/weekly-task', taskController.getWeeklyTasks);
router.get('/:id', taskController.getSingleTask);
router.put('/:id', taskController.updateTask);
router.get('/', taskController.getAllTasks);
router.delete('/:id', taskController.deleteTask);

module.exports = router;