const express = require('express');
const router = express.Router();
const { pool } = require('../db/connection');

// GET /api/about
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM about LIMIT 1');
        if (rows.length === 0) return res.status(404).json({ message: 'About info not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/about/:id (admin update)
router.put('/:id', async (req, res) => {
    const { name, title, subtitle, bio, github_url, linkedin_url, email, location, years_experience } = req.body;
    try {
        await pool.query(
            `UPDATE about SET name=?, title=?, subtitle=?, bio=?, github_url=?, linkedin_url=?, email=?, location=?, years_experience=? WHERE id=?`,
            [name, title, subtitle, bio, github_url, linkedin_url, email, location, years_experience, req.params.id]
        );
        res.json({ message: 'Updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
