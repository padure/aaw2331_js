const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

/**
 * Ruta pentru Pagina de Acasă
 * Extrage toate sarcinile pentru a popula statisticile și slider-ul
 */
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getAll();
        // Trimitem sarcinile către view-ul views/index.ejs
        res.render('index', { tasks });
    } catch (error) {
        console.error("Eroare la încărcarea paginii Home:", error);
        res.status(500).send("Eroare server.");
    }
});

module.exports = router;