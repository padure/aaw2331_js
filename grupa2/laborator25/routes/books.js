var express = require('express');
var router = express.Router();

/* GET books page. */
router.get('/', async function(req, res, next) {
  const data  = await fetch("http://localhost:3001/books");
  const books = await data.json();
  res.render('books', { title: 'Books', books: books });
});

module.exports = router;
