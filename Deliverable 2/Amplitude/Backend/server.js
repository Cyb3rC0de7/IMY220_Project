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
// API routes

// Fetch all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await (await db).collection("users").find().toArray();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch users"});
    }
});

// Fetch a single user
app.get('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await (await db).collection("users").findOne({_id: id});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch user"});
    }
});

// Update a single user
app.put('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const result = await (await db).collection("users").updateOne({_id: id}, {$set: updatedUser});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to update user"});
    }
});

// Create a single user
app.post('/api/users', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await (await db).collection("users").insertOne(newUser);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to create user"});
    }
});

// Delete a single user
app.delete('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (await db).collection("users").deleteOne({_id: id});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to delete user"});
    }
});

// Get all playlists
app.get('/api/playlists', async (req, res) => {
    try {
        const playlists = await (await db).collection("playlists").find().toArray();
        res.json(playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch playlists"});
    }
});

// Get a single playlist
app.get('/api/playlists/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const playlist = await (await db).collection("playlists").findOne({_id: id});
        res.json(playlist);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch playlist"});
    }
});

// Update a single playlist
app.put('/api/playlists/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPlaylist = req.body;
        const result = await (await db).collection("playlists").updateOne({_id: id}, {$set: updatedPlaylist});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to update playlist"});
    }
});

// Create a single playlist
app.post('/api/playlists', async (req, res) => {
    try {
        const newPlaylist = req.body;
        const result = await (await db).collection("playlists").insertOne(newPlaylist);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to create playlist"});
    }
});

// Delete a single playlist
app.delete('/api/playlists/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (await db).collection("playlists").deleteOne({_id: id});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to delete playlist"});
    }
});

// Get all songs
app.get('/api/songs', async (req, res) => {
    try {
        const songs = await (await db).collection("songs").find().toArray();
        res.json(songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch songs"});
    }
});

// Get a single song
app.get('/api/songs/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const song = await (await db).collection("songs").findOne({_id: id});
        res.json(song);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch song"});
    }
});

// Update a single song
app.put('/api/songs/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSong = req.body;
        const result = await (await db).collection("songs").updateOne({_id: id}, {$set: updatedSong});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to update song"});
    }
});

// Create a single song
app.post('/api/songs', async (req, res) => {
    try {
        const newSong = req.body;
        const result = await (await db).collection("songs").insertOne(newSong);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to create song"});
    }
});

// Delete a single song
app.delete('/api/songs/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (await db).collection("songs").deleteOne({_id: id});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to delete song"});
    }
});

// Get all comments
app.get('/api/comments', async (req, res) => {
    try {
        const comments = await (await db).collection("comments").find().toArray();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch comments"});
    }
});

// Get a single comment
app.get('/api/comments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await (await db).collection("comments").findOne({_id: id});
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch comment"});
    }
});

// Update a single comment
app.put('/api/comments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedComment = req.body;
        const result = await (await db).collection("comments").updateOne({_id: id}, {$set: updatedComment});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to update comment"});
    }
});

// Create a single comment
app.post('/api/comments', async (req, res) => {
    try {
        const newComment = req.body;
        const result = await (await db).collection("comments").insertOne(newComment);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to create comment"});
    }
});

// Delete a single comment
app.delete('/api/comments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (await db).collection("comments").deleteOne({_id: id});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to delete comment"});
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
