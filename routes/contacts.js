var express = require('express');
var router = express.Router();
var db = require('../db/knex')

/* GET all contacts */
router.get('/', (req, res, next) => {
  db('contacts').then(contacts => {
    console.log(contacts);
    res.render('contacts/index', { contacts })
  })
})

// SHOW one contact
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('contacts').select('*').where({ id }).first().then(contact => {
    res.render('contacts/show', { contact })
  })
})

// //GET create snack form
// router.get('/new', (req, res, next) => {
//   res.render('snacks/new')
// })
//
// // SHOW one snack
// router.get('/:id', (req, res, next) => {
//   let id = req.params.id
//   db('snacks').select('*').where({ id }).first().then(snack => {
//     res.render('snacks/show', { snack })
//   })
// })
//
// // CREATE snack
// router.post('/', (req, res, next) => {
//   let newSnack = {
//     name: req.body.name,
//     rating: req.body.rating,
//     review_description: req.body['review-description'],
//     image_url: req.body['image-url']
//   }
//   db('snacks').insert(newSnack, '*').then(snack => {
//     res.redirect(`snacks/${snack[0].id}`)
//   })
// })
//
// // GET one snack from to edit
// router.get('/:id/edit', (req, res, next) => {
//   let id = req.params.id
//   db('snacks').select('*').where({ id }).first().then(snack => {
//     res.render('snacks/edit', { snack })
//   })
// })
//
// // POST edited snack
// router.put('/:id', (req, res, next) => {
//   let id = req.params.id
//   let snack = {
//     name: req.body.name,
//     rating: req.body.rating,
//     review_description: req.body['review-description'],
//     image_url: req.body['image-url']
//   }
//   db('snacks').update(snack, '*').where({ id }).then(snack => {
//     res.redirect(`/snacks/${snack[0].id}`)
//   })
// })

// DESTROY one contact
router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  db('contacts').del().where({ id }).then(() => {
    res.redirect('/contacts')
  })
})


// Wes code for edit
// router.get('/', (req, res, next) => {
//   db('contacts').then(contacts => {
//     db('addresses').then(addresses => {
//       // loop through contacts and associate correct address
//       // return final array
//     }).then(result => {
//       res.render('contacts/index', { contacts, addresses })
//     })
//   })
// })


module.exports = router;
