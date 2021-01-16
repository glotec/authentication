const mongoose = require('mongoose');
const config = require('config');

const uri = config.get('LOCALHOST_URI');

// mongoose.connect(uri, {
//     useNewUrlParser:true, 
//     useUnifiedTopology:true, 
//     useCreateIndex: true}, ()=> console.log('connected'));

    //local
uriLocal = config.get('LOCALHOST_URI');

console.log('>>>>>>>>>>>>>This is the URI', uriLocal);

mongoose.connect(uriLocal, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}, () => {
    console.log('connect');
});

module.exports = mongoose;