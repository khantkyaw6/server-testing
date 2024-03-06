const express = require('express');

const app = express();

const PORT = 3004;

app.get('/', (_req, res) => {
	res.send('Hello from the server testing by KK');
});

app.get('/login', (_req, res) => {
	res.send('This is login page');
});

app.listen(PORT, console.log('Server is running at PORT ', PORT));
