const pantries = require('../models/pantries')();

module.exports = () => {
  const getAllPantries = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
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
