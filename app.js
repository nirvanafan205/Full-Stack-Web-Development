const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Adam Kaplan! I will be using MERN stack for this project. Wish me luck!!');
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
