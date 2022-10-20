const redis = require('redis');

const client = redis.createClient(6380, 'localhost');

client.on('connect', function() {
    console.log('Connected!');
});

module.exports = { client }