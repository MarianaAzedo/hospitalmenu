const rooms = require('../models/rooms')();

module.exports = () => {
  const DietList = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { DietList, err } = await rooms.get();
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(DietList);
  };

  return {
    DietList,
  };
};
