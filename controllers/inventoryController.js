// import the dependencies 
const express = require('express');
const mongoose = require('mongoose');

// creating a router 
var router = express.Router();

// link
const Inventory = mongoose.model('Inventory');

// router controller for READ request 
router.get('/', (req,res)=>{
    res.render("inventory/inventoryAddEdit", {
        viewTitle: "Insert a new product into the CMS"
    });
});

// UPDATE
router.post('/', (req,res)=>{
    if(req.body._id == '')
        insertIntoMongoDB(req,res);
    else
    updateIntoMongoDB(req,res);
});

// creating function to insert data into mongoDB
function insertIntoMongoDB(req,res){
    var inventory = new Inventory();
    inventory.productId = req.body.productId;
    inventory.productName = req.body.productName;
    inventory.productPrice = req.body.productPrice;
    inventory.productColor = req.body.productColor;
    inventory.save((err,doc)=>{
        if(!err)
        res.redirect('inventory/list');
        else
        console.log('Error during record insertion : ' + err);
    });
}

// creating a function to update data in mongoDB
function updateIntoMongoDB(req,res){
    Inventory.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err,doc)=>{
        if(!err){res.redirect('inventory/list');}
        else{
            if(err.name === 'ValidationError'){
                handleValidationError(err, req.body);
            res.render("inventory/inventoryAddEdit", {
                // retaining value to be displayed in the child view 
                viewTitle: 'Update Inventory Details',
                prod: req.body
            });
            }
            else
            console.log('Error during updating the record : ' + err);
    }
    });
    }

    // router to retrieve the complete list of products in the inventory 
    router.get('/list', (req,res)=>{
        Inventory.find((err,docs)=>{
            if(!err){
                res.render("inventory/list",{
                    list:docs
                });
            }
            else{
                console.log('Failed to retrieve the Course List: ' + err);
    }
    });
    });

    // creating a function to implement input validations 
    function handleValidationError(err,body){
        for(field in err.errors){
            switch(err.errors[field].path){
                case 'productName':
                body['productNameError'] = err.errors[field].message;
                break;
                default:
                break;
            }
        }
    }

    // router to update a product using its ID
    router.get('/:id', (req,res) =>{
        Inventory.findById(req.params.id, (err,doc) =>{
            if (!err){
                res.render("inventory/inventoryAddEdit",{
                    viewTitle:"Update product details",
                    inventory: doc
                });
            }
        });
    });

    // router controller for delete request 
    router.get('/delete/:id', (req,res) =>{
        Inventory.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(!err){
                res.redirect('/inventory/list');
            }
            else{console.log('Failed to delete contents of product: ' + err ); }
        });
    });

    module.exports = router;