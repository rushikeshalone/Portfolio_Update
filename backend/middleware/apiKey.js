// API Key Authentication Middleware
const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const expectedApiKey = process.env.API_KEY;

    if (!apiKey) {
        return res.status(401).json({ error: 'API key is required. Use header: x-api-key' });
    }

    if (apiKey !== expectedApiKey) {
        return res.status(403).json({ error: 'Invalid API key' });
    }

    next();
};

module.exports = { verifyApiKey };
