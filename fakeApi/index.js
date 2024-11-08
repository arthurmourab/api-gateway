const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/fakeApi', (req, res) => {
    res.send('hello from fake api!');
});

app.listen(PORT, () => {
    console.log(`Fake api live on port ${PORT}`);
})
