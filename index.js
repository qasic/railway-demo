const express = require('express');
const nocache = require('nocache');

const app = express();
const port = 3000;

// disable ExpressJS caching
// see https://stackoverflow.com/a/53240717
app.set('etag', false);
app.use(nocache());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Test endpoint called!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
