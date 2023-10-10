const router = require('express').Router();
const projectController = require('../controller/projectController');

router.post('/create-project', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getSingleProject);
router.delete('/delete-project', projectController.deleteProject);

module.exports = router;