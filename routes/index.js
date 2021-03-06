module.exports = function (io) {
const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');

// Se puede usar solo una linea: const router = require('express').Router();
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( { name: name } );
  res.render( 'index', { tweets: list, showForm: true, nombre:name });
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var list = tweetBank.find( { id: id } );
  res.render( 'index', { tweets: list } );
});
router.post('/tweets', urlencodedParser,function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

return router;
};