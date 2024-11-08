const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Gateway live on port ${PORT}`);
});
