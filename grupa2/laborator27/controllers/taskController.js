const Task = require('../models/taskModel');

const taskController = {
    // router.get('/', taskController.index)
    index: async (req, res) => {
        try {
            const tasks = await Task.getAll();
            res.render('tasks/index', { tasks, title: 'Listă Sarcini' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Eroare la recuperarea sarcinilor');
        }
    },

    // router.get('/create', taskController.create)
    create: (req, res) => {
        res.render('tasks/create', { title: 'Adaugă Sarcină Nouă' });
    },

    // router.post('/', taskController.store)
    store: async (req, res) => {
        try {
            await Task.create(req.body);
            res.redirect('/tasks'); // Presupunând că ruta principală este /tasks
        } catch (error) {
            console.error(error);
            res.status(500).send('Eroare la salvarea sarcinii');
        }
    },

    // router.get('/:id/edit', taskController.edit)
    edit: async (req, res) => {
        try {
            const task = await Task.getById(req.params.id);
            if (!task) {
                return res.status(404).send('Sarcina nu a fost găsită');
            }
            res.render('tasks/edit', { task, title: 'Editează Sarcina' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Eroare la încărcarea formularului de editare');
        }
    },

    // router.post('/:id/update', taskController.update)
    update: async (req, res) => {
        try {
            await Task.update(req.params.id, req.body);
            res.redirect('/tasks');
        } catch (error) {
            console.error(error);
            res.status(500).send('Eroare la actualizarea sarcinii');
        }
    },

    // router.post('/:id/delete', taskController.destroy)
    destroy: async (req, res) => {
        try {
            await Task.delete(req.params.id);
            res.redirect('/tasks');
        } catch (error) {
            console.error(error);
            res.status(500).send('Eroare la ștergerea sarcinii');
        }
    }
};

module.exports = taskController;