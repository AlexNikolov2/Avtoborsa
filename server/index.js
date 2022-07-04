const express = require('express');

start();

async function start() {
    const app = express();

    app.listen(3000, () => console.log('Server running on http://localhost:3030'));
}