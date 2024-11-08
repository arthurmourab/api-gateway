const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/fakeApi', (req, res, next) => {
    res.send('hello from fake api!');
});
app.get('/mantisApi', (req, res, next) => {
    res.send('mantis says hello');
});

app.listen(PORT, () => {
    console.log(`Fake api live on port ${PORT}`);
})
