const Task = require('../models/taskModel');

const taskController = {
    // router.get('/', ...)
    index: async (req, res) => {
        try {
            const tasks = await Task.getAll();
            const completedTasks = tasks.filter(t => t.status === 'completed');
            res.render('tasks/index', { tasks, completedTasks });
        } catch (error) {
            res.status(500).send("Eroare la recuperarea sarcinilor: " + error.message);
        }
    },

    // router.get('/create', ...)
    create: (req, res) => {
        res.render('tasks/create');
    },

    // router.post('/', ...)
    store: async (req, res) => {
        try {
            await Task.create(req.body);
            res.redirect('/tasks');
        } catch (error) {
            res.status(500).send("Eroare la salvare: " + error.message);
        }
    },

    // router.get('/:id/edit', ...)
    edit: async (req, res) => {
        try {
            const task = await Task.getById(req.params.id);
            if (!task) return res.status(404).send('Sarcina nu a fost găsită');
            res.render('tasks/edit', { task });
        } catch (error) {
            res.status(500).send("Eroare: " + error.message);
        }
    },

    // router.post('/:id/update', ...)
    update: async (req, res) => {
        try {
            await Task.update(req.params.id, req.body);
            res.redirect('/tasks');
        } catch (error) {
            res.status(500).send("Eroare la actualizare: " + error.message);
        }
    },

    // router.post('/:id/delete', ...)
    destroy: async (req, res) => {
        try {
            await Task.delete(req.params.id);
            res.redirect('/tasks');
        } catch (error) {
            res.status(500).send("Eroare la ștergere: " + error.message);
        }
    }
};

module.exports = taskController;