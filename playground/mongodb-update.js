// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
  if(err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //findOneandUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b7c7d9e80ac871f043933eb'),
  // },{
  //   $set: {
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b7b0272a041a21fb8b54063')
  },{
    $set: {
      name:'Samer'
    },
    $inc: {
      age:1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});
