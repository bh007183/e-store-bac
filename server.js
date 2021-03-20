
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
// Sets up the Express App
require("dotenv").config()

var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var corsOptions = {
  origin: 'https://bjh-hop-estore.herokuapp.com'
}
// corsOptions
app.use(cors(corsOptions));
// Static directory
app.use(express.static("public"));
/////////////////////////////////
const adminroutes = require("./routes/admin-routes.js")
const cartroutes = require("./routes/cart-routes.js")
// const customerroutes = require("./routes/customer-routes.js")
const productroutes = require("./routes/product-routes.js")

// Routes
// =============================================================
app.use(adminroutes)
app.use(cartroutes)
app.use(productroutes)


// Syncing our sequelize models and then starting our Express app
// =============================================================

// Change force: to true if it's cool for the site to remove database items.
db.sequelize.sync({ force: false}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
