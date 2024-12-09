const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//app middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


//consume routes