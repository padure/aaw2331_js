const db = require('../config/database');

const Task = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (data) => {
        const { title, description, status, priority, deadline } = data;
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, status, priority, deadline) VALUES (?, ?, ?, ?, ?)',
            [title, description, status, priority, deadline]
        );
        return result.insertId;
    },

    update: async (id, data) => {
        const { title, description, status, priority, deadline } = data;
        await db.query(
            'UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, deadline = ? WHERE id = ?',
            [title, description, status, priority, deadline, id]
        );
    },

    delete: async (id) => {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
};

module.exports = Task;