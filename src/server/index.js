const express = require("express");
const config = require("./config");
const app = express();

app.use(express.static("dist"));

const quoteRoute = require("./routes/quote");

app.use("/api/quote", quoteRoute);

app.listen(process.env.PORT || config.DEFAULT_PORT, () =>
  console.log(`Listening on port ${process.env.PORT || config.DEFAULT_PORT}!`)
);
