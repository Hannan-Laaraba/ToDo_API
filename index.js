import express from "express";

//Create an express app
const app = express();

//Define routes
app.get('/', (req, res) => {
    // console.log(req.query, req.headers);
    res.send("Over and in!");
});

app.get('/ping', (req, res) => {
    res.send("Ping Pong!");
});

app.get('/file',(req, res) => {
    console.log(process.cwd());
    res.sendFile(process.cwd() + "/index.html");
});

//Listen for incoming requests
app.listen(4000, () => {
    // console.log("Express app is running!")
});