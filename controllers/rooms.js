const rooms = require('../models/rooms')();

module.exports = () => {
  const DietList = async (req, res) => {
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
