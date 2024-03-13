import { Router } from "express";
import { MongoClient } from "mongodb";

const router = Router ();

//Connection URL
const url = 'mongodb+srv://todo-api:xyoz7KpOI2QgotM3@hannan.zaese7i.mongodb.net/?retryWrites=true&w=majority&appName=Hannan';
const client = new MongoClient(url);

//Define routes
router.post('/todos', async (req, res) => {
    //Connect mongodb client
    await client.connect();
    //Get access to todo database
    const db = client.db('todo-db');
    //Get access to todos collection
    const collection = db.collection('todos');
    //Add todo document to todos collection
    const result = await collection.insertOne(req.body);
    //Disconnect mongodb client
    await client.close();
    //Return response
    res.json(result);
});

router.get('/todos', (req, res) => {
    res.send('Get all todos!');
});

router.delete('/todos', (req, res) => {
    res.send('Delete all todos!');
});

router.get('/todos/:id', (req, res) => {
});

router.patch('/todos/:id', (req, res) => {
    res.send(`Update todo with id: ${req.params.id}`);
});

router.delete('/todos/:id', (req, res) => {
    res.send(`Delete todo with id:${req.params.id}`);
});

//Export router
export default router;