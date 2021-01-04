const menuroom = require('../models/menuroom')();

module.exports = () => {
  const getAllMenubyRoom = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { menu, err } = await menuroom.get();
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menu);
  };

  const getMenubyRoomDate = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { idroom, date } = req.body;
    const { menu, err } = await menuroom.get(idroom, date);
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menu);
  };

  const getMenubyDate = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { date } = req.body;
    const { menu, err } = await menuroom.get(date);
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menu);
  };

  // function (route) to add new user
  const addMenu = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    let userid = req.body.userid;
    let roomid = req.body.roomid;
    let date = req.body.date;
    let menu = req.body.menu;

    const { results, err } = await users.add(userid, roomid, date, menu);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(results);
  };

  return {
    getAllMenubyRoom,
    getMenubyRoomDate,
    getMenubyDate,
    addMenu,
  };
};
