const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

/**
 * Ruta pentru Pagina de Acasă (Dashboard)
 * Calculează statisticile în timp real din baza de date
 */
router.get('/', async (req, res, next) => {
    try {
        // Extragem toate sarcinile folosind modelul existent
        const tasks = await Task.getAll();

        // Calculăm statisticile necesare pentru index.ejs
        const stats = {
            total: tasks.length,
            completed: tasks.filter(t => t.status === 'completed').length,
            in_progress: tasks.filter(t => t.status === 'in_progress').length,
            high_priority: tasks.filter(t => t.priority === 'high').length
        };

        // Randăm vizualizarea 'index' (cea cu panoul statistic) și trimitem obiectul stats
        res.render('index', { 
            title: 'Dashboard Statistici', 
            stats: stats 
        });

    } catch (error) {
        console.error("Eroare la generarea statisticilor:", error);
        // Trimitem eroarea către middleware-ul de eroare din Express
        next(error);
    }
});

module.exports = router;