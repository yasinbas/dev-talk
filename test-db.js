const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://devtalk:password123@localhost:5433/devtalk?schema=public',
});

client.connect()
    .then(() => {
        console.log('Connected successfully');
        return client.query('SELECT NOW()');
    })
    .then(res => {
        console.log(res.rows[0]);
        return client.end();
    })
    .catch(err => {
        console.error('Connection error', err.stack);
        client.end();
    });
