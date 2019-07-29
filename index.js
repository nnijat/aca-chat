
let express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 8080;

// Routes
let clientsRoutes = require('./routes/clients');
let messagesRoutes = require('./routes/messages');

// Call Routes
app.use(clientsRoutes);
app.use(messagesRoutes);

app.listen(thePort, (err) => {
  err ? console.log("Error", err) : console.log("Web server is listening for messages on port:", thePort);
});
