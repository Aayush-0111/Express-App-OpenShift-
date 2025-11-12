const express = require('express');   // Import the Express library
const app = express();                // Create an Express app instance

// Define a route for the homepage ("/")
app.get('/', function(req, res) {
    res.send('Hello, world! \n');     // Send response when someone visits /
});

// Start the server on port 8080
app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});

// Export the app (useful if you import this file elsewhere or for testing)
module.exports = app;
