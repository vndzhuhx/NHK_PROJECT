var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var substitutionSchema = mongoose.model('substitutionSchema');
var generationSchema = mongoose.model('generationSchema');
var fanSchema = mongoose.model('fanSchema');
var comparisonSchema = mongoose.model('comparisonSchema');
var verificationSchema = mongoose.model('verificationSchema');
router.get('/',function(req, res){
    res.send('dao');
});

router.get('/substitution', function(req, res){
    substitutionSchema.find().exec(function(err, val){
        res.send(val);
    });
});

router.get('/generation', function(req, res){
    generationSchema.find().exec(function(err, val){
        res.send(val);
    });
});
router.get('/fan', function(req, res){
    fanSchema.find().exec(function(err, val){
        res.send(val);
    });
});
router.get('/comparison', function(req, res){
    comparisonSchema.find().exec(function(err, val){
        res.send(val);
    });
});
router.get('/verification', function(req, res){
    verificationSchema.find().exec(function(err, val){
        console.log(val)
        res.send(val);
    });
});
router.post('/reduce',function(req,res){
    fanSchema.find().exec(function(err, val){
        res.send(val);
    });
})
module.exports = router;