// Import the Express module
const express = require('express');
const bodyParser = require('body-parser')
const axios =  require('axios');
const PNG = require('png-js');

//Define the port number
const port = process.env.PORT || 9000;

// Create an instance of the Express application
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// serve static files
app.use('/src', express.static(__dirname + "/src"));

//Define the default route
app.get('/', (req, res) => {
  res.sendFile( __dirname + "/" + "/html/index.html" ); 
})

// Define a route for a GET request
app.get('/submit', (req, res) => {
    let data = req.body;
    data = axios.get(`http://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[200]x[100]`)
    .then(response => {
      res.send(response.data.);
    })
    .catch(error => {
      console.log(error);
    })
});
// Start the server on port 9000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});