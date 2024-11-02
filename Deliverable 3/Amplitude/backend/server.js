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

// Fetch a single user by username
app.get('/api/users/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await (await db).collection("users").findOne({username: username});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch user"});
    }
});

// Fetch a single user by username and password
app.get('/api/users/:username/:password', async (req, res) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        const user = await (await db).collection("users").findOne({username: username, passwordHash: password});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch user"});
    }
});

// Fetch all friends of a single user
app.get('/api/friends/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await (await db).collection("users").findOne({username: username});
        const friends = await (await db).collection("users").find({username: {$in: user.friends}}).toArray();
        res.json(friends);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch friends"});
    }
});

// Add a friend to a user
app.post('/api/friends/:username/addFriend/:friendUsername', async (req, res) => {
    try {
        const { username, friendUsername } = req.params;
        const user = await (await db).collection("users").findOne({username: username});
        const friend = await (await db).collection("users").findOne({username: friendUsername});

        if (!user || !friend) {
            return res.status(404).json({ message: 'User or friend not found' });
        }

        if (user.friends.includes(friendUsername)) {
            return res.status(400).json({ message: 'User is already friends with this user' });
        }
        
        // Add the friend to the user's friends, and the user to the friend's friends
        const result = await (await db).collection("users").updateOne(
            { username: username },
            { $push: { friends: friendUsername } }
        );
        await (await db).collection("users").updateOne(
            { username: friendUsername },
            { $push: { friends: username } }
        );

        res.json({ message: 'Friend added successfully', result });
    } catch (error) {
        console.error('Error adding friend:', error);
        res.status(500).json({ message: 'Failed to add friend' });
    }
});

// Remove a friend from a user
app.delete('/api/friends/:username/removeFriend/:friendUsername', async (req, res) => {
    try {
        const { username, friendUsername } = req.params;
        // Remove the friend from the user's friends, and the user from the friend's friends
        const result = await (await db).collection("users").updateOne(
            { username: username },
            { $pull: { friends: friendUsername } }
        );
        await (await db).collection("users").updateOne(
            { username: friendUsername },
            { $pull: { friends: username } }
        );

        res.json(result);
    } catch (error) {
        console.error('Error removing friend:', error);
        res.status(500).json({ message: 'Failed to remove friend' });
    }
});

// Update a single user
app.put('/api/users/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const updatedUser = req.body;
        const result = await (await db).collection("users").updateOne({username}, {$set: updatedUser});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to update user"});
    }
});

// Create a single user
app.post('/api/users/signup', async (req, res) => {
    try {
        const newUser = req.body;
        // Check if the user already exists
        const existingUser = await (await db).collection("users").findOne({ username: newUser.username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }
        // Create an ID for the new user by finding the max ID and incrementing it by 1
        const maxId = await (await db).collection('users').find().sort({ _id: -1 }).limit(1).toArray();
        const id = maxId.length > 0 ? parseInt(maxId[0]._id) + 1 : 1;
        newUser._id = id.toString();
        // Insert the new user into the database
        const result = await (await db).collection("users").insertOne(newUser);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
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

// Get a users created playlists
app.get('/api/playlists/user/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await (await db).collection("users").findOne({username: username});
        const playlists = await (await db).collection("playlists").find({_id: {$in: user.playlists}}).toArray();
        res.json(playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch playlists"});
    }
});

// Get a users liked playlists
app.get('/api/playlists/liked/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await (await db).collection("users").findOne({username: username});
        const playlists = await (await db).collection("playlists").find({_id: {$in: user.likes}}).toArray();
        res.json(playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch playlists"});
    }
});

// Like a playlist
app.post('/api/playlists/:id/like', async (req, res) => {
    const { userId } = req.body;
    const playlistId = req.params.id;

    try {
        await (await db).collection("users").updateOne(
        { _id: userId },
        { $addToSet: { likes: playlistId } }
        );

        await (await db).collection("playlists").updateOne(
        { _id: playlistId },
        { $addToSet: { likedBy: userId } }
        );

        res.status(200).json({ message: "Playlist liked successfully" });
    } catch (error) {
        console.error("Error liking playlist:", error);
        res.status(500).json({ message: "Failed to like playlist" });
    }
});

// Unlike a playlist
app.post('/api/playlists/:id/unlike', async (req, res) => {
    const { userId } = req.body;
    const playlistId = req.params.id;

    try {
        await (await db).collection("users").updateOne(
        { _id: userId },
        { $pull: { likes: playlistId } }
        );

        await (await db).collection("playlists").updateOne(
        { _id: playlistId },
        { $pull: { likedBy: userId } }
        );

        res.status(200).json({ message: "Playlist unliked successfully" });
    } catch (error) {
        console.error("Error unliking playlist:", error);
        res.status(500).json({ message: "Failed to unlike playlist" });
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

// Get all songs in a playlist
app.get('/api/playlists/:playlistID/songs', async (req, res) => {
    try {
        const playlistID = req.params.playlistID;
        const playlist = await (await db).collection("playlists").findOne({_id: playlistID});
        const songs = await (await db).collection("songs").find({_id: {$in: playlist.songs}}).toArray();
        res.json(songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch songs"});
    }
});

// Add a song to a playlist
app.post('/api/playlists/:playlistId/addSong/:songId', async (req, res) => {
    try {
        const { playlistId, songId } = req.params;
        const playlist = await (await db).collection("playlists").findOne({ _id: playlistId });

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        if (playlist.songs.includes(songId)) {
            return res.status(400).json({ message: 'Song is already in the playlist' });
        }

        const result = await (await db).collection("playlists").updateOne(
            { _id: playlistId },
            { $push: { songs: songId } }
        );

        res.json({ message: 'Song added to playlist successfully', result });
    } catch (error) {
        console.error('Error adding song to playlist:', error);
        res.status(500).json({ message: 'Failed to add song to playlist' });
    }
});

// Remove a song from a playlist
app.delete('/api/playlists/:playlistId/removeSong/:songId', async (req, res) => {
    try {
      const { playlistId, songId } = req.params;
      const result = await (await db).collection("playlists").updateOne(
        { _id: playlistId },
        { $pull: { songs: songId } } // Remove the song from the playlist
      );
      res.json(result);
    } catch (error) {
      console.error("Error removing song from playlist:", error);
      res.status(500).json({ message: "Failed to remove song from playlist" });
    }
});

// Get all comments in a playlist
app.get('/api/playlists/:playlistID/comments', async (req, res) => {
    try {
        const playlistID = req.params.playlistID;
        const playlist = await (await db).collection("playlists").findOne({_id: playlistID});
        const comments = await (await db).collection("comments").find({_id: {$in: playlist.comments}}).toArray();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch comments"});
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
        // Create an ID for the new user by finding the max ID and incrementing it by 1
        const maxId = await (await db).collection('playlists').find().sort({ _id: 1 }).toArray();
        const id = maxId.length > 0 ? maxId.length + 1 : 1;
        newPlaylist._id = id.toString();
        const result = await (await db).collection("playlists").insertOne(newPlaylist);

        // Add the playlist to the user's playlists
        await (await db).collection("users").updateOne({username: newPlaylist.creator}, {$push: {playlists: newPlaylist._id}});

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
        // Create an ID for the new user by finding the max ID and incrementing it by 1
        const maxId = await (await db).collection('songs').find().sort({ _id: 1 }).toArray();
        const id = maxId.length > 0 ? maxId.length + 1 : 1;
        newSong._id = id.toString();
        const result = await (await db).collection("songs").insertOne(newSong);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to create song"});
    }
});

// Delete a single song
app.delete('/api/songs/:songId', async (req, res) => {
    try {
        const { songId } = req.params;
        const result = await (await db).collection('songs').deleteOne({ _id: songId });
        await (await db).collection('playlists').updateMany(
            {},
            { $pull: { songs: songId } }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to remove song from database" });
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
        // Create an ID for the new comment by finding the max ID and incrementing it by 1
        const maxId = await (await db).collection('comments').find().sort({ _id: 1 }).toArray();
        const id = maxId.length > 0 ? maxId.length + 1 : 1;
        newComment._id = id.toString();
        const result = await (await db).collection("comments").insertOne(newComment);

        // Add the comment to the playlist's comments
        await (await db).collection("playlists").updateOne({_id: newComment.playlistId}, {$push: {comments: newComment._id}});

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

        // Remove the comment from the playlist's comments
        await (await db).collection("playlists").updateMany(
            {},
            { $pull: { comments: id } }
        );
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to delete comment"});
    }
});

// Search API to search playlists, songs, and friends
app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.q; // Get search query from query parameters
  
      const dbInstance = await db;
  
      // Search playlists
      const playlists = await dbInstance.collection('playlists').find({ 
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { creator: { $regex: query, $options: 'i' } },
            { genre: { $regex: query, $options: 'i' } },
            { tags: { $regex: query, $options: 'i' } }
            ]
      }).toArray();
  
      // Search songs
      const songs = await dbInstance.collection('songs').find({ 
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { artist: { $regex: query, $options: 'i' } },
            { genre: { $regex: query, $options: 'i' } },
            { tags: { $regex: query, $options: 'i' } }
            ]
      }).toArray();
  
      // Search users/friends by username or name
      const friends = await dbInstance.collection('users').find({
        $or: [
          { username: { $regex: query, $options: 'i' } },
          { name: { $regex: query, $options: 'i' } }
        ]
      }).toArray();
  
      res.json({ playlists, songs, friends });
    } catch (error) {
      console.error('Error searching:', error);
      res.status(500).json({ message: 'Error performing search' });
    }
  });
  


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
