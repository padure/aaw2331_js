const express = require('express');
const router = express.Router();
//Controller
const taskController = require('../controllers/taskController.js');
//Rute
router.get('/', taskController.index);
router.get('/create', taskController.create);
router.post('/', taskController.store);
router.get('/:id/edit', taskController.edit);
router.post('/:id/update', taskController.update);
router.post('/:id/delete', taskController.destroy);
module.exports = router;