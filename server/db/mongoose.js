var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://eladmin:hola123>@ds021434.mlab.com:21434/todo', {useNewUrlParser: true})

module.exports = {mongoose}
