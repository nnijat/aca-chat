
let express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 8080;

// Routes
let clientsRoutes = require('./routes/clients');

app.listen(thePort, (err) => {
  err ? console.log("Error", err) : console.log("Web server is listening for messages on port:", thePort);
});

let clientId = 0;
module.exports = clientId;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];



