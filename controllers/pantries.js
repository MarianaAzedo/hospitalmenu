const pantries = require('../models/pantries')();

module.exports = () => {
  const getAllPantries = async (req, res) => {
    const { pantry, err } = await pantries.get();
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(pantry);
  };

  return {
    getAllPantries,
  };
};
