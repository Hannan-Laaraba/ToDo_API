import express from "express";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos.routes.js";

//Create an express app
const app = express();

//Apply middlewares
app.use(bodyParser.json());


//use routes
app.use(todosRoutes);

//Listen for incoming request
app.listen(4000, () => {
    console.log('Express app is running!')
})

// app.get('/file',(req, res) => {
//     console.log(process.cwd());
//     res.sendFile(process.cwd() + "/index.html");
// });
