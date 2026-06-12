const express = require('express');
const router = express.Router();
const { pool } = require('../db/connection');

// GET /api/projects
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM projects ORDER BY featured DESC, display_order ASC'
        );
        // Parse JSON tech_stack
        const projects = rows.map(p => ({
            ...p,
            tech_stack: typeof p.tech_stack === 'string' ? JSON.parse(p.tech_stack) : p.tech_stack
        }));
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/projects/featured
router.get('/featured', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM projects WHERE featured = TRUE ORDER BY display_order'
        );
        const projects = rows.map(p => ({
            ...p,
            tech_stack: typeof p.tech_stack === 'string' ? JSON.parse(p.tech_stack) : p.tech_stack
        }));
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
