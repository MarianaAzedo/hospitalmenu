const db = require('../db')();
const COLLECTION = 'staffuser';

module.exports = () => {
  const get = async (name = null) => {
    try {
      if (!name) {
        const staff = await db.get(COLLECTION);
        return { staff };
      }
      const staff = await db.get(COLLECTION, { name });
      return { staff };
    } catch (err) {
      return {
        err,
      };
    }
  };

  return {
    get,
  };
};
