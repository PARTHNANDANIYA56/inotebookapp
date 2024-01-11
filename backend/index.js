const express = require('express');
const app = express();
const connectDB=require("./database.js")
const port = 5000;

(async () => {
    try {
        await connectDB();
        await require('./database.js')(); // Correct, assuming database.js returns a function

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
})();
