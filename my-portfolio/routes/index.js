var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

// About
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

// Projects
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

// Contact
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
