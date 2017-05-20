const express = require('express');

const app = express();

const port = process.env.PORT || 8081;

console.log(__dirname);
app.use(express.static(__dirname + '/dist'));

app.listen(
    port,
    () => console.log(`Listening on port ${port}.`)
);
