const mongoose = require('../dbconnect/index');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        req: true
    },
    email: {
        type: String,
        req: true
    },
    address: {
        type: String,
        req: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);