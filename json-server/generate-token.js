const jwt = require('jsonwebtoken');

// Secret key for signing the token
const SECRET_KEY = 'your_secret_key';

// Generate a token
const token = jwt.sign(
  {
    id: 1,
    username: 'user1',
    role: 'admin'
  },
  SECRET_KEY,
  { expiresIn: '1h' } // Token expiry
);

console.log(token);
