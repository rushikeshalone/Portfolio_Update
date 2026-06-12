const express = require('express');
const router = express.Router();
const { pool } = require('../db/connection');

// GET /api/skills - grouped by category
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM skills ORDER BY category, display_order');
        const grouped = rows.reduce((acc, skill) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill);
            return acc;
        }, {});
        res.json(grouped);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/skills/flat - flat array
router.get('/flat', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM skills ORDER BY category, display_order');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
