const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Add your code below

app.get('/', (req, res) => {
   
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});