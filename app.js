const express = require('express');

const redis = require('redis');

const PORT = 5000;

const app = express();

const client = redis.createClient();


app.get('/', (req, res) => {

    client.set('myName', 'Mher')

    res.send('worked')
})
app.listen(5000, () => {
    console.log(`App listening on port ${PORT}`);
});