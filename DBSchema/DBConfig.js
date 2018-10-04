var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nic: String,
    fname: String,
    lname: String,
    phone: String,
    email: String,
    password: String,
    amount: Number
});
//viraj's
const JourneyDetails = new Schema({
    Username: String,
    busRoute: String,
    start: String,
    startLat: Number,
    startLong: Number,
    end: String,
    endLat: Number,
    endLong: Number,
    fare: Number,
    date: Date
});

mongoose.model('JourneyDetails', JourneyDetails);
mongoose.model('User', UserSchema);
mongoose.connect('mongodb://127.0.0.1:27017/CSSE_DB', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;