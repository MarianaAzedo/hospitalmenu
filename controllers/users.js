const users = require('../models/users')();

module.exports = () => {
  const getPatients = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { user, err } = await users.get();
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(user);
  };
  const getPatientsByRoom = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
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
