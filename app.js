const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.urlencoded())

app.post('/login', (req, res) => {
    const {name, role, date, comment} = req.body;
    console.log(name, role, date, comment)
    res.send('send success');
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${5000}`);
})