const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(()=>{console.log("MongoDB connected")}).catch((err)=>{console.log(err)})

const quoteSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

app.get('/',async (req,res)=>{
      try{
        const randomNumber = Math.floor(Math.random() * 3800) + 1;
        const result = await Quote.findOne({number:randomNumber})
        res.status(200).json(result);
      }catch(err){
        res.status(200).json(err);
      }
})

app.get('/search',async (req,res)=>{
  try{
    const query = req.query.q;
    const result = await Quote.find({ author:new RegExp(query,'i')})
    res.status(200).json(result);
  }catch(err){
    res.status(500).json(err);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
