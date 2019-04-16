var express = require('express');
var router = express.Router();
var db = require('./../models/connetion');



router.get('/findbuyers', async (req, res, next) => {
  await db.query('SELECT price,buyer FROM marketing.buyers;', (err, obj) => {
    err ? res.status(404).send("error while fetching buyers") : res.status(200).send(obj);
  });
})

router.get('/findsellers', async (req, res, next) => {
  await db.query('SELECT price,seller FROM marketing.sellers;', (err, obj) => {
    err ? res.status(404).send("error while fetching sellers") : res.status(200).send(obj);

  })
})

router.post('/addSeller', function (req, res, next) {
  let price = req.body.price;
  let seller = req.body.seller;
  db.query('INSERT INTO `marketing`.`sellers` (`seller`, `price`) VALUES (' + '"' + seller + '"' + ',' + price + ')', (err, response) => {
    err ? res.send(err) : res.send(response);
  })
})

router.post('/addBuyer', function (req, res, next) {
  let price = req.body.price;
  let buyer = req.body.buyer;
  db.query('INSERT INTO `marketing`.`buyers` (`price`, `buyer`) VALUES (' + price + ',' + '"' + buyer + '"' + ')', (err, response) => {
    err ? res.send(err) : res.send(response);
  })
})

module.exports = router;
