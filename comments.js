//Create web server
//We are creating a server that runs on port 3000
//We are using express to create the server
const express = require('express');
const app = express();
const PORT = 3000;

//Get the comments from the comments.json file
const comments = require('./comments.json');

//
