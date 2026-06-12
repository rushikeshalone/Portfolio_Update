const express = require('express');
const router = express.Router();
const { pool } = require('../db/connection');

// GET /api/experience
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM experience ORDER BY is_current DESC, start_date DESC'
        );
        const experience = rows.map(e => ({
            ...e,
            tech_used: typeof e.tech_used === 'string' ? JSON.parse(e.tech_used) : e.tech_used
        }));
        res.json(experience);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
