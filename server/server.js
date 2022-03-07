const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    console.log(res);
    res.status(200);
    res.json({ message: 'Hello, World!' });
});

app.listen(5000, () => {
    console.log("server running on port 5000")
});