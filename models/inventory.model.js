const mongoose = require('mongoose');

// attributes of the inventory object 
var inventorySchema = new mongoose.Schema({
    productID:{
        type:String,
        required: 'This field is required'
    },
    productName: {
        type: String,
        required: 'This field is required'
    },
    productPrice: {
        type: Number,
        required: 'This field is required'
    },
    productColor: {
        type: String,
        required: 'This field is required'
    }
});

mongoose.model('Inventory', inventorySchema);