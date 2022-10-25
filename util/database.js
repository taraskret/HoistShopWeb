const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    
   
    'mongodb+srv://admin-taras:test123@cluster0.p55w9.mongodb.net/HoistShop'
  )
  .then(client => {
    console.log('Connected to DB');
    _db = client.db()
    callback()
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
};

const getDb = () =>{
  if(_db){
    return _db
  }
  throw 'no database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;