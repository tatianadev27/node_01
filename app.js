const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('hello im Tatiana the best'))

app.listen(3000, () => {
	console.log('My REST API port 3000')
})
