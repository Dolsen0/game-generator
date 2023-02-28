const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const generateRandomPrompt = require('./generator');

admin.initializeApp();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Game Generator');
});

app.get('/main', (req, res) => {
  const promptString = generateRandomPrompt();
  res.send(promptString);
});

exports.api = functions.https.onRequest(app);