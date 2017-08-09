const express = require('express');
const app = express();
const models = require('../reactApp/models');
const User = models.User;
const Doc = models.Doc;
var connect = 'mongodb://thanh:thanh@ds145312.mlab.com:45312/thanhnguyen';

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
        login: true,
        user_id: user._id,
      });
    } else {
      res.send({
        login: false,
        error: 'Could not find user'
      });
    }
  });
});

app.post('/getDocs', function(req, res) {
  User.findById(req.body.id, function(err, user){
    var promiseArray = user.docs.map(function(doc){
      return getDocument(doc);
    });
    Promise.all(promiseArray)
    .then(function(responses){
      res.send({
        docs: responses
      });
    });
  });
});

app.post('/document', function(req,res){
  Doc.findById(req.body.id, function(err, doc){
    res.send({
      title: doc.title,
      content: doc.content
    });
  });
});

app.post('/create', function(req,res){
  var newDoc = new Doc({
    content:[],
    owner:req.body.id,
    contributors: [req.body.id],
    password:  req.body.password,
    title: req.body.title
  });
  newDoc.save(function(err, doc){
    if(err){
      res.send({
        error: err
      });
    } else{
      User.findById(req.body.id, function(err,user){
        user.docs.push(doc._id);
        user.save();
      });
      res.send({
        doc: newDoc
      });
    }
  });
});

app.post('/save', function(req,res){
  Doc.findById(req.body.id, function(err,doc){
    if(err){
      console.log(err);
      res.send({
        saved: false,
        error: err
      });
    }else if(doc){
      doc.content = req.body.content;
      doc.save(function(err) {
        if (err) {
          res.send({
            saved: false,
            error: err
          });
        } else {
          res.send({
            saved: true
          });
        }
      });
    } else {
      res.send({
        saved: false,
        error: 'Could not find document'
      });
    }
  });
});

app.post('/addSharedDocument', function(req, res) {
  Doc.findById(req.body.doc_id, function(err, doc) {
    if (err) {
      res.send({
        added: false,
        error: err
      });
    } else {
      User.findById(req.body.user_id, function(err, user) {
        if (err) {
          res.send({
            added: false,
            error: err
          });
        } else {
          user.docs.push(doc._id);
          user.save();
          doc.contributors.push(user._id);
          doc.save();
          res.send({
            added: true,
            doc: doc
          });
        }
      });
    }
  });
});


app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});



function getDocument(docId){
  return new Promise(function(resolve, reject){
    Doc.findById(docId)
    .then(function(doc){
      resolve(doc);
    })
    .catch(function(err){
      reject(err);
    });
  });
}
