var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dtoModel = mongoose.model('user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res){
  var username = {'username':req.body.username};
  var result = {};
  dtoModel.find(username).exec(function(err,val){
    if(val.length>0){
      if(val[0].password===req.body.password){
        result['status'] = 0;
        result['message'] = 'success';
      }else{
        result['status'] = -1;
        result['message'] = 'password error';
      }
    }else{
      result['status'] = -1;
      result['message'] = 'username error';
    }
    res.send(result);
  })
});

module.exports = router;
