const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Add your code below

app.use(/** ... */);

app.post('/', (req, res) => {
    // Add your code below
});
    
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});