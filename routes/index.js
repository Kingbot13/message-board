var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "hello there",
    user: "Kenobi",
    added: new Date(),
  },
  {
    text: "General Kenobi...",
    user: "Grievous",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.post("/new", (req, res, next) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
