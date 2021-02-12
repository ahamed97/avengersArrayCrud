const express = require('express');
const avengers = require('./routes/avengers');
const home = require('./routes/home');
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", home);
app.use("/api/avengers", avengers);

app.listen(port, () => {
    console.log("started");
});
