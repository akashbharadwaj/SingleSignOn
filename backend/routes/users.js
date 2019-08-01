var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/register',  function(req,res,next){
  var user = new User({
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now()
  });

  let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

router.post('/login', function(req,res,next){
  console.log("login");
  console.log(req.body.username);
  let promise = User.findOne({username:req.body.username}).exec();

  promise.then(function(doc){
    if(doc) {
      if(doc.isValid(req.body.password)) {
        //generate token
        let token = jwt.sign({username:doc.username},'secretkey', {expiresIn: '1h'});
        return res.status(200).json(token);
      } else {
        return res.status(501).json({message:'Invalid Credentials'});
      }
    }
    else {
      return res.status(501).json({message:'Username is not registered'});
    }
  });

  promise.catch(function(err){
    return res.status(501).json({message: 'Some Internal Error'});
  });
});


router.get('/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.username);
});

var decodedToken = '';
function verifyToken(req,ers,next) {
  let token = req.query.token;
  console.log(token);
  jwt.verify(token,'secretkey', function(err, tokenData){
    if(err) {
      return res.status(400).json({message: 'Unauthorized Request'});
    }

    if(tokenData) {
      decodedToken = tokenData;
      next();
    }
  })
}
module.exports = router;
