const express = require("express");
const MonogDB = require("../model/DBschema");
const UserDB = require("../model/UserSchema");
const dataManager = require("../utilities/dataManager");
const securityManager = require("../utilities/securityManager");
const sortMomentDate = require('../utilities/sortDate')

const router = express.Router();

const authToken = securityManager.authenticateToken

// router.get("/Todo", authToken , function (req, res) {
//   MonogDB.find({})
//     .sort({ date: -1 })
//     .then(function (todoCards) {
//       newCards = sortMomentDate(todoCards)
//       res.send(newCards);
//     });
// });

router.get("/Todo", authToken , function (req, res) {
  UserDB.find({username: req.user.username})
  .populate("todoCards")
  .select("todoCards")
  .sort({ date: -1 })
  .then(function (todoCards) {
    newCards = sortMomentDate(todoCards[0].todoCards)
    res.send(newCards);
  });
});

router.get("/Todo/:name", authToken, function (req, res) {
  MonogDB.findOne({name : req.params.name})
    .then(function (todoCard) {
      res.send(todoCard);
    });
});
router.get("/TodosDone/:isDone", authToken , function (req, res) {

  MonogDB.find({isDone : req.params.isDone})
    .sort({ date: -1 })
    .then(function (todoCards) {
      res.send(todoCards);
    });
});

router.post("/Todo", authToken , (req, res) => {

  dataManager.addTodoCard(req)

  res.end();
});

router.delete("/Todo/:name", authToken , function (req, res) {
  let todoName = req.params.name;

  MonogDB.deleteOne({ name: todoName }).then(function (err) {
    if(err.deletedCount > 0) {
      res.send({messege : `deleted : ${todoName}`});
    }else{
      res.status(404).send({messege : `couldn't find todo card with that name : ${todoName}` });
    }
  })
});
router.put("/Todo/:ListID", authToken , function (req, res) {
  const filter = { _id: req.params.ListID };
  const update = { isDone: true };
  MonogDB.findOneAndUpdate(filter, update)
  .then(() =>{
    res.status(204)
})
.catch(err=>{res.status(400).send({err})})

// router.put("/Todo/:name", authToken , function (req, res) {
//   let todoName = req.params.name;
//   let description = req.body.description;

  res.end();
});
module.exports = router;
