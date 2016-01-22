var express = require('express');
var passport = require('passport');
var router = express.Router();

var app = express();

var mongoose = require('mongoose');
mongoose.set('debug', true);

var prefs = require('../helpers/prefs.js');

exports.get = function(req, res) {
  prefs.broadcastEmailVerified(req.user.organization, function(err, canSendEmails) {
    res.render('admin', {
      user: req.user,
      canSendEmails: canSendEmails
    });
  });
};
