const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/auth/login') {
    const SECRET_KEY = 'your_secret_key';

    const token = jwt.sign(
      {
        id: 1,
        username: req.body.username || 'user1',
        role: 'admin'
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  }
  next();
};
