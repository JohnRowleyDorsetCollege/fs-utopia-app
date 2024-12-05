const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';
// Enable CORS for all routes
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Route to generate an auth token
app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    console.log(username)
    console.log(password)

    // Simple validation (In practice, validate against a database)
        // Generate JWT
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: 'Authentication successful!',
            token,
        });

});

// Protected route example
app.get('/protected', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        res.json({
            message: 'Welcome to the protected route!',
            user: decoded.username,
        });
    });
});

app.listen(port, () => {
    console.log(`Auth server running on http://localhost:${port}`);
});
