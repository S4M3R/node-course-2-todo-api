const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '6b8477fff78b400f88f290301';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos)
// // })
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo)
// // })
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found')
//   }
//   console.log('Todo',todo)
// }).catch((e) => console.log(e))


if (!ObjectID.isValid('5b843c40765d7e35c44128eb')){
  console.log('ID not valid')
  }else{
  User.findById('5b843c40765d7e35c44128eb').then((user) => {
    if(!user){
      return console.log('ID not found')
    }
    console.log('User',user)
  }).catch((e) => console.log(e))
}
