const menu = require('../models/menu')();

module.exports = () => {
  const getAllMenu = async (req, res) => {
    const { menus, err } = await menu.get();
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.json(menus);
  };
  const getMenuByDescription = async (req, res) => {
    const { menus, err } = await menu.get(req.params.description);
    console.log('here it goes our error ' + err);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(menus);
  };

  return {
    getAllMenu,
    getMenuByDescription,
  };
};
