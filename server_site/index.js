const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const Usersmodel = require('./models/users');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://xunji:xunji@cluster0.jifefv0.mongodb.net/Storygram_DB?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hey")
    const user = new Usersmodel({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3001"); // The port here should match the one in app.listen
});
