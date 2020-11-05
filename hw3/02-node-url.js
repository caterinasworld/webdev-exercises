const http = require('http'); 
const url = require('url'); 
const querystring = require('querystring'); 

const port = process.env.PORT || 5000;

// Add your code below

const server = http.createServer((req, res) => {
    
    // Add your code below

    res.end();
  });
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});