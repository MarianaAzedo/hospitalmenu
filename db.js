const uri = process.env.MONGO_URI;
const MongoClient = require('mongodb').MongoClient;
const MONGO_OPTION = { useUnifiedTopology: true };
const DB_NAME = 'hospitalmenu';

//method para recuperar os dados do Banco de Dados.
module.exports = () => {
  const get = (collectionName, query = {}) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, MONGO_OPTION, (err, client) => {
        if (err) {
          console.log(err);
          return reject('---Connection failed---');
        }

        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        collection.find(query).toArray((err, docs) => {
          if (err) {
            console.log(err);
            return reject('---Connection failed---');
          }
          resolve(docs);
          client.close();
        });
      });
    });
  };

  const add = (collectionName, item = {}) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, MONGO_OPTION, (err, client) => {
        if (err) {
          console.log(err);
          return reject('---Connection failed---');
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        collection.insertOne(item, (err, docs) => {
          if (err) {
            console.log(err);
            return reject('---Connection failed---');
          }
          resolve(docs);
          client.close();
        });
      });
    });
  };

  const aggregate = (collectionName, pipeline = []) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, MONGO_OPTION, (err, client) => {
        if (err) {
          console.log(err);
          return reject('---Connection failed---');
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        collection.aggregate(pipeline).toArray((err, docs) => {
          if (err) {
            console.log(err);
            return reject('---Connection failed---');
          }
          resolve(docs);
          client.close();
        });
      });
    });
  };

  return {
    get,
    add,
    aggregate,
  };
};
