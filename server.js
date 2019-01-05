const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(7000, () => {
    console.log(`server running → PORT ${server.address().port}`);
});