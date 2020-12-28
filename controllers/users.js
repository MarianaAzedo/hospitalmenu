const users = require('../models/users')();

module.exports = () => {
  const getPatients = async (req, res) => {
    const { user, err } = await users.get();
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(user);
  };
  const getPatientsByRoom = async (req, res) => {
    const { user, err } = await users.get(req.params.room);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(user);
  };
  return {
    getPatients,
    getPatientsByRoom,
  };
};
