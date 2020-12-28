const db = require('../db')();
const COLLECTION = 'pantries';

module.exports = () => {
  const get = async (name = null) => {
    try {
      if (!name) {
        const pantry = await db.get(COLLECTION);
        return { pantry };
      }
      const pantry = await db.get(COLLECTION, { name });
      return { pantry };
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
