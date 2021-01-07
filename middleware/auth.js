const jwt = require('jsonwebtoken');
const token = require('./token');
module.exports = (req, res, next) => {
  try {
    let accessToken = req.headers.jwt;

    if (!accessToken) {
      return res.status(403).send({ error: 'Invalid Token' });
    }

    const RANDOM_TOKEN = token.RANDOM_TOKEN;
    const decodedToken = jwt.verify(accessToken, RANDOM_TOKEN);
    console.log(decodedToken);
    next();
  } catch (error) {
    error = 'Invalid request!';
    return res.status(401).json({ error: error });
  }
};
