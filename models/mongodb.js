const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ColorPicker',{useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log('Successfully established connection w mongoDB');
    }else{
        console.log('Failed to establish connetion with mongoDB with Error: ' + err);
    }
});

require('./inventory.model');