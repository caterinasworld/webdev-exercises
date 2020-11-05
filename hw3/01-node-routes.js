const http = require('http'); 
const port = process.env.PORT || 5000;

// http://localhost:5000/ should return a status code 200 with a 'welcome' message

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code

// http://localhost:5000/cache should return 'this resource was cached' in plain text and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// for other routes, this exercise should return a status code 404 with '404 - page not found' in plain text

const server = http.createServer((req, res) => {
    
    // Add your code below

    res.end();
  });
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  