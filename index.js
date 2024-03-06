const express = require('express');

const app = express();

const PORT = 3004;

app.get('/', (_req, res) => {
	res.send('Hello from the server testing by KK');
});

app.listen(PORT, console.log('Server is running at PORT ', PORT));
