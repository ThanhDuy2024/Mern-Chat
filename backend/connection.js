const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.dva6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(console.log("connect mongoose db"));
