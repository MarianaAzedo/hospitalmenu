const menuroom = require('../models/menuroom')();

module.exports = () => {
  const getAllMenubyRoom = async (req, res) => {
    const { menu, err } = await menuroom.get();
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
    addMenu,
  };
};
