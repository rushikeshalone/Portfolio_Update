const express = require('express');
const router = express.Router();
const { pool } = require('../db/connection');

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    try {
        await pool.query(
            'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
            [name.trim(), email.trim(), subject?.trim() || '', message.trim()]
        );
        res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/contact (admin - all messages)
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
