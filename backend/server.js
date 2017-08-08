const express = require('express');
const app = express();
import models from '../reactApp/models';
const User = models.User;
const Doc = models.Doc;
var connect = 'mongodb://admin:pass@ds127993.mlab.com:27993/scheduler_bot';

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(connect);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Example route
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var repeatPass = req.body.repeatPass;
  if(password !== repeatPass){
    res.send({
      success: false,
      error: 'passwords do not match'
    });
  }else{
    var user = new User({
      email: email,
      password: password,
      docs: []
    });
    var saveduser = user.save();
    res.send({
      success: true,
      user_id: saveduser._id
    });
  }

});

app.post('/login', function(req, res) {
  User.findOne({email: req.body.email, password: req.body.password}, function(err,user){
    if(err){
      console.log(err);
      res.send({
        login: false,
        error: err
      });
    } else if(user){
      res.send({
        login: true
      });
    } else {
      res.send({
        login: false,
        error: 'Could not find user'
      });
    }
  });
});

app.post('/create', async function(req,res){
  var newDoc = new Doc({
    content:'',
    owner:req.body.id,
    contributors: [req.body.id],
    password:  req.body.password
  });
  var doc = await newDoc.save();
  res.send({
    doc: doc
  });
});

app.post('/save', function(req,res){
  Doc.findById(req.body.id, async function(err,doc){
    if(err){
      console.log(err);
      res.send({
        saved: false,
        error: err
      });
    }else if(doc){
      doc.content = req.body.content;
      await doc.save();
      res.send({
        saved: true
      });
    }else{
      res.send({
        saved: false,
        error: 'Could not find document'
      });
    }
  });
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
