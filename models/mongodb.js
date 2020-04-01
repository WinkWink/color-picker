const mongoose = require('mongoose');
require('dotenv').config();
var connectionString= 'mongodb+srv://amanda:Lollollol12@cluster0-v11he.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString,{ useUnifiedTopology: true,
    useNewUrlParser: true }).catch((error) => { console.log(error); });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://amanda:Lollollol12@cluster0-v11he.mongodb.net/test?retryWrites=true&w=majority'
// , { useNewUrlParser: true })
//         .then(connect => console.log('connected to mongodb..'))
//         .catch(e => console.log('could not connect to mongodb', e))

// module.exports = {mongoose}

// mongoose.connect('mongodb://localhost:27017/ColorPicker',{useNewUrlParser: true}, (err)=>{
//     if(!err){
//         console.log('Successfully established connection w mongoDB');
//     }else{
//         console.log('Failed to establish connetion with mongoDB with Error: ' + err);
//     }
// });
const port = process.env.PORT || 3000;
app.listen(port);

require('./inventory.model');