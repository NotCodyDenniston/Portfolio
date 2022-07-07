const path = require('./frontend');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(Portfolio, '..', 'frontend');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });