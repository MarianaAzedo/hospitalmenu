const db = require('../db')();
const COLLECTION = 'menu';

module.exports = () => {
  const get = async (description = null) => {
    try {
      if (!description) {
        const menus = await db.get(COLLECTION);
        return { menus };
      }
      const menus = await db.get(COLLECTION, { description });
      return { menus };
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
