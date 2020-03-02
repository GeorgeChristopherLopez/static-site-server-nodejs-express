// imports
const express = require('express');
const path = require('path');


const app = express();



// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// home page
app.get('/', (req, res) => res.render('index'));

// the 404 route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/404.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
