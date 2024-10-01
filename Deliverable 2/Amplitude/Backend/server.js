//u21669849, Qwinton Knocklein
const path = require('path');
const express = require('express');

const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://u21669849:1LESJq7aveLKqK8s@imy220.hspd6.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(express.json()); // For handling JSON data in request body

async function connectToDatabase() { // Connect to the database
    try {
        await client.connect();
        console.log("Connected to the database");
        return client.db("Amplitude");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

const db = connectToDatabase(); // Connect to the database

// Example: Fetch all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await (await db).collection("users").find().toArray();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch users"});
    }
});

// Example: Add a single user
app.post('/api/users', async (req, res) => {
    try {
        const user = req.body;
        const result = await (await db).collection("users").insertOne(user);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to add user"});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
