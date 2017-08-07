const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  password: String,
  docs: Array
});

var docSchema = mongoose.Schema({
  content: String,
  owner: String,
  contributors: Array,
  password: String
});

var User = mongoose.model('User', userSchema);
var Doc = mongoose.model('Docs', docSchema);

module.exports = {
  User: User,
  Doc: Doc
};
