const mongoose = require('mongoose');

var connectionString= 'mongodb+srv://amanda:Lollollol12@cluster0-wcbhc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString).catch((error) => { console.log(error); });


// mongoose.connect('mongodb://localhost:27017/ColorPicker',{useNewUrlParser: true}, (err)=>{
//     if(!err){
//         console.log('Successfully established connection w mongoDB');
//     }else{
//         console.log('Failed to establish connetion with mongoDB with Error: ' + err);
//     }
// });

require('./inventory.model');