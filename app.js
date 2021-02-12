const express = require('express');
const avengers = require('./routes/avengers');
const home = require('./routes/home');
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", home);
app.use("/api/avengers", avengers);

let avengerArray = [
    { id: 1, name: "Iron Man" },
    { id: 2, name: "Thor" },
];

app.listen(port, () => {
    console.log("started");
});