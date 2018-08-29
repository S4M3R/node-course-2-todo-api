var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://eladmin:hola123@ds021434.mlab.com:21434/todo', {useNewUrlParser: true}).then(() => {
  console.log('Connected to db')
}).catch((e) => {
  console.log('Failed to connect db', e)
})

module.exports = {mongoose}
