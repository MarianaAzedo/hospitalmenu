const db = require('../db')();
const COLLECTION = 'menuroom';

module.exports = () => {
  const get = async (roomid = null, userid = null) => {
    try {
      if (!roomid) {
        const menu = await db.get(COLLECTION);
        return { menu };
      }
      const menu = await db.get(COLLECTION, { roomid, userid });
      return { menu };
    } catch (err) {
      return {
        err,
      };
    }
  };

  const add = async (
    roomid,
    userid,
    breakfast = [],
    lunch = [],
    evening = [],
  ) => {
    try {
      const date = new Date();
      const addMenu = await db.add(COLLECTION, {
        userid: userid,
        roomid: roomid,
        date: date,
        menu: [
          {
            breakfast: breakfast,
          },
          {
            lunch: lunch,
          },
          {
            evening: evening,
          },
        ],
      });

      if (addMenu) {
        const PIPELINE = [{ roomid }, { $set: { status: 'on' } }];
        const updateStatusRoom = await db.update('rooms', PIPELINE);
      }
    } catch (err) {
      return {
        err,
      };
    }
  };

  return {
    get,
    add,
  };
};
