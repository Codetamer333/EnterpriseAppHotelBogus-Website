const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/users?directConnection=true', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error(error);
  });

// Define the Mongoose schema
const droomsSchema2 = new mongoose.Schema({
  name2: String,
  email2: String,
  phone2: String, 
  tripstart2: Date,
  tripend2: Date
});

const Drooms = mongoose.model('doublerooms', droomsSchema2);

app.post('/doublerooms', async (req, res) => {
  try {
    console.log(req.body);
    const drooms = new Drooms(req.body);
    await drooms.save();
    console.log('Saved user:', drooms);
    res.send(drooms);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

const sroomsSchema1 = new mongoose.Schema({
  name1: String,
  email1:String,
  phone1:String,
  tripstart1: Date,
  tripend1: Date,
})

const Srooms = mongoose.model('singlerooms',sroomsSchema1 )


app.post('/singlerooms',  async (req,res) => {
  try {
    console.log(req.body);
    const srooms = new Srooms(req.body);
    await srooms.save();
    console.log('Saved user:', srooms);
    res.send(srooms);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error'); 
  } 
})


// Start the Express server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});