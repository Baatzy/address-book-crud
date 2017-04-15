var express = require('express');
var router = express.Router();
var db = require('../db/knex')

/* GET all contacts */
router.get('/', (req, res, next) => {
  db('contacts').then(contacts => {
    res.render('contacts/index', { contacts })
  })
})

router.get('/', (req, res, next) => {
  db('contacts').then(contacts => {
    db('addresses').then(addresses => {
      // loop through contacts and associate correct address
      // return final array
    }).then(result => {
      res.render('contacts/index', { contacts, addresses })
    })
  })
})



module.exports = router;
