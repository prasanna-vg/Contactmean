const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//RETRIVING
router.get('/contacts', (req,res,next)=>{
    //'Retriving the contact list'
    Contact.find(function(err, contact){
        res.json(contact);
    })
});

//ADDING
router.post('/contact', (req,res,next)=>{
    //'Adding the contact list'
    let newContact = Contact({
        first_name: req.body.first_name,
        last_name :req.body.last_name,
        phone : req.body.phone
    });
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:'User not added'});
            console.log(err);
        }else{
            res.json({msg:'User added Successfully'});
        }
    })
});

//DELETING
router.delete('/contact/:_id', (req,res,next)=>{
    //'Deleting the contact list'
    Contact.deleteOne({_id:req.params._id},(err,result)=>{
        if(err){
            res.json(err);
            console.log(err);
        }else{
            res.json(result);
            console.log(result);
        }
    })
});
module.exports = router;