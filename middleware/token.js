const jwt = require('jsonwebtoken');
const db = require('../db')();
const crypto = require('crypto');

exports.login = async (req, res, next) => {
  try {
    let name = req.body.name;

    const user = await db.get('users', { name });
    if (!user || user.length == 0) {
      error = 'User not Found!';
      return res.status(404).json({ error: error });
    }
    const key = req.body.password;
    const password = user[0].password;
    const verifyKey = key == password ? true : false;

    if (!verifyKey) {
      error = 'Incorrect Password!';
      return res.status(401).json({ error: error });
    }

    const RANDOM_TOKEN = crypto.randomBytes(15).toString('HEX');
    const token = jwt.sign({ userId: user[0]._id }, RANDOM_TOKEN, {
      expiresIn: '24h',
    });
    res.cookie('jwt', token, { secure: false, httpOnly: true });
    res.status(200).json({
      user: user[0].name,
      room: user[0].room,
      Information: 'This token below was sent in a cookie named jwt',
      token: token,
    });

    module.exports.RANDOM_TOKEN = RANDOM_TOKEN;
    res.send();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
