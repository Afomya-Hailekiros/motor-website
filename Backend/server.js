const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/authenticate', { useNewUrlParser: true, useUnifiedTopology: true });

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("Token is missing");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.status(403).json("Error with token");
            } else {
                if (decoded.role === "admin") {
                    next();
                } else {
                    return res.status(403).json("Not admin");
                }
            }
        });
    }
};

app.get('/dashboard', verifyUser, (req, res) => {
    res.json("Success");
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            const newUser = new UserModel({ username, email, password: hash });
            newUser.save()
                .then(user => res.status(201).json("User registered successfully"))
                .catch(err => {
                    console.error("Error saving user:", err);
                    res.status(400).json({ message: "Error saving user", error: err });
                });
        })
        .catch(err => res.status(500).json({ message: "Error hashing password", error: err }));
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    UserModel.findOne({ username: username })
        .then(user => {
            if (!user) {
                return res.status(404).json({ Status: "Failure", message: "No record existed" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ Status: "Failure", message: "Error comparing passwords", error: err });
                }

                if (isMatch) {
                    const token = jwt.sign(
                        { username: user.username, role: user.role },
                        "jwt-secret-key",
                        { expiresIn: '1d' }
                    );

                    res.cookie('token', token, { httpOnly: true, secure: false }); // Change secure to false for local testing
                    return res.status(200).json({ Status: "Success", role: user.role, token });
                } else {
                    return res.status(401).json({ Status: "Failure", message: "The password is incorrect" });
                }
            });
        })
        .catch(err => {
            return res.status(500).json({ Status: "Failure", message: "Error occurred during login", error: err });
        });
});


app.listen(3005, () => {
    console.log("Server is Running on port 3005");
});
