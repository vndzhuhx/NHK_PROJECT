var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var CompilationSchema = mongoose.model('CompilationSchema');
var substitutionSchema = mongoose.model('substitutionSchema');
var case1Schema = mongoose.model('case1Schema');
var case2Schema = mongoose.model('case2Schema');
var case3Schema = mongoose.model('case3Schema');

router.post('/saveAll', function (req, res) {
    // console.log(req.body.file);
    new CompilationSchema({
        compilation: req.body.file
    }).save(function (err) {
        if (err) throw err;
        console.log('success');
        res.send('success');
    })
});

router.post('/saveSub', function (req, res) {
    new substitutionSchema({
        substitution: req.body.param
    }).save(function (err) {
        if (err) throw err;
        console.log('success');
        res.send('success');
    })
});

router.get('/substitution', function (req, res) {
    substitutionSchema.find().exec(function (err, val) {
        res.send(val);
    });
});

router.post('/saveCase1', function (req, res) {
    new case1Schema({
        case: req.body.param
    }).save(function (err) {
        if (err) throw err;
        console.log('success');
        res.send('success');
    })
});

router.post('/saveCase2', function (req, res) {
    new case2Schema({
        case: req.body.param
    }).save(function (err) {
        if (err) throw err;
        console.log('success');
        res.send('success');
    })
});

router.post('/saveCase3', function (req, res) {
    new case3Schema({
        case: req.body.param
    }).save(function (err) {
        if (err) throw err;
        console.log('success');
        res.send('success');
    })
});
module.exports = router;