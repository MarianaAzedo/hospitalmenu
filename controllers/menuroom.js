const menuroom = require('../models/menuroom')();

module.exports = () => {
  const getAllMenubyRoom = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { room, userid } = req.params; // <- This is the same as: req.params.room | req.params.day
    const { menu, err } = await menuroom.get(String(room), userid);

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

  // method (route) to add new user
  const addMenu = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const userid = req.body.userid;
    const roomid = req.body.roomid;
    const breakfast = req.body.breakfast;
    const lunch = req.body.lunch;
    const evening = req.body.evening;
    const { results, err } = await menuroom.add(
      roomid,
      userid,
      breakfast,
      lunch,
      evening,
    );

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
