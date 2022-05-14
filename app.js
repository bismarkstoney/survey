const dotevn = require('dotenv');
dotevn.config({});
console.log(dotevn.config({}));
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to Heroku',
	});
});

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
