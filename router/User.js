var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    stdNumb:String,
    StdName:String,
});
mongoose.model('stdInfo', UserSchema);

module.exports = mongoose.model('stdInfo');