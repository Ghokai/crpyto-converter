const express = require("express");
const router = express.Router();
const quoteManager = require("../managers/quoteManager");

//TO DO: GLOBAL ERROR HANDLING!!!
router.get("/", async function(req, res) {
  try {
    if (!req.query.symbol) {
      res.status(400).send({ error_code: 400, error_message: "bad input!" });
    }
    const response = await quoteManager.crypto2Currency(req.query.symbol);
    res.send(response);
  } catch (e) {
    let error;
    if (e.error && e.error.status) {
      error = e.error.status;
    } else {
      error = { error_code: 500, error_message: "server error!" };
    }
    res.status(error.error_code).send(error);
  }
});

module.exports = router;
