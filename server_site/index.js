const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const Usersmodel = require('./models/users');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://zunaedsazzad00:Mzs484931@cluster0.qasulof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zunaed.sazzad.tonay@g.bracu.ac.bd',
        pass: '#Mzs48493131'
    }
});

// Secret key for JWT
const secret = 'xunji';

// Register route
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const user = new Usersmodel({ name, email, password });
        await user.save();

        // Generate a token
        const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

        // Send verification email
        const mailOptions = {
            from: 'zunaed.sazzad.tonay@g.bracu.ac.bd',
            to: email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking the following link: http://localhost:3000/verify/${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Error sending email' });
            } else {
                res.status(201).json({ message: 'Verification email sent', user });
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Verify route
app.get('/verify/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, secret);

        const user = await Usersmodel.findOne({ email: decoded.email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Verification failed' });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
