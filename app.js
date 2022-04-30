const express = require('express');
const app = express();
const PORT = 5000;
let formData = require('./data.js');

app.use(express.static('public'));
app.use(express.urlencoded())

app.post('/login', (req, res) => {
    let {name, role, date, comment} = req.body;
    formData = {
        Name: name, 
        Menu: role, 
        date: date, 
        Feedback: comment
    };
    console.log(formData);
    res.send('send success');
})
console.log(formData);
app.listen(PORT, () => {
    console.log(`server is listening on port ${5000}`);
})