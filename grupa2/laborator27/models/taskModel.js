const db = require('../config/database');

const Task = {
    // Obținerea tuturor sarcinilor
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return rows;
    },

    // Obținerea unei sarcini după id
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    },

    // Crearea unei sarcini
    create: async (taskData) => {
        const { title, description, status, priority, deadline } = taskData;
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, status, priority, deadline) VALUES (?, ?, ?, ?, ?)',
            [title, description, status, priority, deadline]
        );
        return result.insertId;
    },

    // Actualizarea unei sarcini
    update: async (id, taskData) => {
        const { title, description, status, priority, deadline } = taskData;
        await db.query(
            'UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, deadline = ? WHERE id = ?',
            [title, description, status, priority, deadline, id]
        );
    },

    // Ștergerea unei sarcini
    delete: async (id) => {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
};

module.exports = Task;