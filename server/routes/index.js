var express = require('express');
var mongoose = require('mongoose');
var dtoModel = mongoose.model('user');
var substitutionSchema = mongoose.model('substitutionSchema');
var comparisonSchema = mongoose.model('comparisonSchema');
var generationSchema = mongoose.model('generationSchema');
var fanSchema = mongoose.model('fanSchema');
var verificationSchema = mongoose.model('verificationSchema');
var URL = require('url');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create',function(req, res){
  new dtoModel({
    username: 'user001',
    password: 'seikyo@'
  }).save(function(err){
    res.redirect('/');
  });
});

router.get('/substitutionSchema',function(req,res){
  fs.readFile(__dirname+ "/" + "/json/substitution.json", 'utf8', function (err, data) {
    // var model = JSON.parse(data);
    // console.log(model);
    new substitutionSchema({
      substitution: data
    }).save(function(err){
      if (err) throw err;
      console.log('substitution success');
      res.send('substitution success');
    });
  });
});

router.get('/comparisonSchema', function(req,res){
  fs.readFile(__dirname + "/json/comparison.json", "utf8", function(err,data){
    new comparisonSchema({
      comparison: data
    }).save(function(err){
      if (err) throw err;
      console.log('comparison success');
      res.send('comparison success');
    });
  })
});

router.get('/generationSchema', function(req, res){
  fs.readFile(__dirname + "/json/generation.json", "utf8", function(err,data){
    new generationSchema({
      generation: data
    }).save(function(err){
      if (err) throw err;
      console.log('generation success');
      res.send('generation success');
    });
  });
});

router.get('/fanSchema', function(req, res){
  fs.readFile(__dirname + "/json/fan.json", "utf8", function(err,data){
    new fanSchema({
      fan: data
    }).save(function(err){
      if (err) throw err;
      console.log('fan success');
      res.send('fan success');
    });
  });
});

router.get('/verificationSchema', function(req, res){
  fs.readFile(__dirname + "/json/verification.json", "utf8", function(err,data){
    new verificationSchema({
      verification: data
    }).save(function(err){
      if (err) throw err;
      console.log('verification success');
      res.send('verification success');
    });
  });
});
module.exports = router;
