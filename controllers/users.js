const users = require('../models/users')();
const menuroom = require('../models/menuroom')();

module.exports = () => {
  const getPatients = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { menu = [] } = await menuroom.get();
    const { user = [], err } = await users.get();

    const processedUsers = user.map((u) => ({
      haveMenu: menu.find((m) => m.roomid === u.room && m.userid === u.name)
        ? true
        : false,
      ...u,
    }));

    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(processedUsers);
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

  const Authenticate = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const name = req.body.name;
    const password = req.body.password;
    const { user, err } = await users.authenticate(name, password);
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
    Authenticate,
  };
};
