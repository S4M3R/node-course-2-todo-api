var mongoose = require('mongoose')
var ip_local = 'mongodb://localhost:27017'
var ip_online = 'mongodb://eladmin:hola123@ds021434.mlab.com:21434/todo'

if(process.env.PORT){
  var ip = ip_online;
}else{
  var ip = ip_local;
}

mongoose.Promise = global.Promise
mongoose.connect('mongodb://eladmin:hola123@ds021434.mlab.com:21434/todo', {useNewUrlParser: true}).then(() => {
  console.log('Connected to db')
}).catch((e) => {
  console.log('Failed to connect db', e)
})

module.exports = {mongoose}
