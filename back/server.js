//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var fs = require('fs');
// const app = require("./app");
const RouteProducts = require('./router/product')
//On définit notre objet express nommé app
const app = express();


//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
  });
  app.use(urlencodedParser);
  app.use(bodyParser.json());
  

//Connexion à la base de données
mongoose
  .connect("mongodb+srv://sismondi:bonjour1e@express.coygs.mongodb.net/marketplace?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Définition du routeur

const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);

app.use('/api/products/', RouteProducts);


app.use(express.static('./front')); 
app.use('/images', express.static('images'));


app.get('/main', function(req, res) {

  fs.readFile('../front/produits.html', function(error, content) {
      if (error) {
          res.writeHead(500);
          res.end();
      }
      else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
      }
  });

});

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));