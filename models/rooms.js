const db = require('../db')();
const COLLECTION = 'rooms';

module.exports = () => {
  const get = async () => {
    try {
      const pipeline = [
        {
          $lookup: {
            from: 'users',
            localField: 'userid',
            foreignField: '_id',
            as: 'diet_list',
          },
        },
        {
          $project: {
            room: 1,
            status: 1,
            author: {
              $arrayElemAt: ['$diet_list', 0],
            },
          },
        },
      ];
      const DietList = await db.aggregate(COLLECTION, pipeline);
      return { DietList };
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
