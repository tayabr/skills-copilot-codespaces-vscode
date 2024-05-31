// Create web server
// Create a web server that listens for requests on port 3000. It should respond to requests for the /comments resource with a JSON string containing the following array of comment objects:

// [
//   { "author": "author1", "comment": "this is a comment" },
//   { "author": "author2", "comment": "this is also a comment" },
//   { "author": "author3", "comment": "this is yet another comment" }
// ]
// The server should respond to all other requests with a 404 status code and the following JSON object:

// { "error": "Not found" }
// You should use the Express.js library to create the server.

// Your solution should be in a file named comments.js.

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json([