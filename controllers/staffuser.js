const staffuser = require('../models/staffuser')();

module.exports = () => {
  const AllStaffUsers = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { staff, err } = await staffuser.get();
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(staff);
  };
  const OneStaffUsers = async (req, res) => {
    //headers to allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    const { staff, err } = await staffuser.get(req.params.name);
    if (err) {
      res.status(500).json({
        err,
      });
    }
    res.json(staff);
  };
  return {
    AllStaffUsers,
    OneStaffUsers,
  };
};
