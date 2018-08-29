var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}).then(() => {
  console.log('Connected to db')
}).catch((e) => {
  console.log('Failed to connect db', e)
})

module.exports = {mongoose}
