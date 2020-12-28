const db = require('../db')();
const COLLECTION = 'users';

module.exports = () => {
  const get = async (room = null) => {
    try {
      if (!room) {
        const user = await db.get(COLLECTION);
        return { user };
      }
      const user = await db.get(COLLECTION, { room });
      return { user };
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
