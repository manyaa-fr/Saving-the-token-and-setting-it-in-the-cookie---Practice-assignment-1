const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const encrypt = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.error('Invalid token:', err.message);
    return null;
  }
};

// Test the encrypt and decrypt functions
const test = () => {
  const payload = { id: 1, name: 'John Doe' };
  console.log('Original Payload:', payload);

  const token = encrypt(payload);
  console.log('Encrypted Token:', token);

  const decoded = decrypt(token);
  console.log('Decrypted Payload:', decoded);

  if (decoded && decoded.id === payload.id && decoded.name === payload.name) {
    console.log('Success');
  } else {
    console.log('Failure');
  }
};

test();

module.exports = {
  encrypt,
  decrypt
};