import { Router } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({path: ['.env.local']});

const router = Router ();

//Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const todoDb = 'todo-db';
const todoCollection = 'todos';

//Define routes
router.post('/todos', async (req, res) => {
    //Connect mongodb client
    await client.connect();
    //Get access to todo database
    const db = client.db(todoDb);
    //Get access to todos collection
    const collection = db.collection(todoCollection);
    //Find all todos from collection
    const result = await collection.insertOne({
        ...req.body,
        isCompleted: false,
        createdAt: new Date ()
    });
    //Disconnect mongodb client
    await client.close();
    //Return response
    res.json(result);
});

router.get('/todos', async (req, res) => {
    //Connect mongodb client
    await client.connect();
    //Get access to to do database
    const db = client.db(todoDb);
    //Get access to todos collection
    const collection = db.collection(todoCollection);
    //Get all todos from collection
    const limit = parseInt(req.query.limit) || 2 ;
    const result = await collection.find({}).limit(limit).toArray();
    //Disconnect mongodb client
    await client.close();
    //Return response
    res.json(result);
});

router.delete('/todos', async (req, res) => {
    //Connect mongodb client
    await client.connect();
    //Get access to todo database
    const db = client.db(todoDb);
    //Get access to todos collection
    const collection = db.collection(todoCollection);
    //Delete all todos from collection
    const result = await collection.deleteMany({})
     //Disconnect mongodb client
     await client.close();
     //Return response
     res.json(result);
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