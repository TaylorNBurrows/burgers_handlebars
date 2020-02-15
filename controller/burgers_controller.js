var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/")
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
