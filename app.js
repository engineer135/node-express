const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! I\'m express!!'))
app.listen(3000, () => console.log('express app is listening on port 3000...'))
