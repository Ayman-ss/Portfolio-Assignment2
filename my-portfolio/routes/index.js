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
// GET /contact (fixing the contact page so it actually accepts messeges)
router.get('/contact', function (req, res) {
  const sent = req.query.sent === '1';
  res.render('contact', {
    title: 'Contact',
    sent,                 // boolean
    errors: null,         // array or null
    values: null          // {name,email,phone,msg} or null
  });
});

// POST /contact – validate, re-render with errors or redirect with ?sent=1
router.post('/contact', function (req, res) {
  const { name, email, phone, msg } = req.body;

  const errors = [];
  if (!name)  errors.push('Please enter your name.');
  if (!email) errors.push('Please enter your email.');
  if (!msg)   errors.push('Please enter a comment/message.');

  if (errors.length) {
    return res.status(400).render('contact', {
      title: 'Contact',
      sent: false,
      errors,
      values: { name, email, phone, msg }
    });
  }

  console.log('Contact form submission:', { name, email, phone, msg });
  res.redirect('/contact?sent=1'); // success
});



module.exports = router;
