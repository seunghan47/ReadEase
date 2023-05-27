const express = require('express');
const bcryptjs = require("bcryptjs");
const bookRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Book = require('../../models/Book')

//Signup Route
bookRouter.post("/addBook", async (req, res) => {
    try {
        const { author, title, rating, image, userId } = req.body;
        if (!author || !title || !rating || !image || !userId) {
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        const newBook = new Book({ author, title, rating, image, userId});
        const savedBook = await newBook.save();
        console.log(savedBook.title);
        res.json(savedBook);
    }   catch (err) {
        res.status(500).json({ error: err.message});
    }
});

//why check if token valid??
bookRouter.post("/tokenIsValid", async (req, res) => {
    try{
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// to get the users credentials
bookRouter.get("/", auth, async (req, res) => {
    const user  = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });

});

//i am thinking this is the primary get function 
bookRouter.get("/get/:userId", auth, async (req, res) => {
    const books = await Book.find({userId: req.params.userId});
    return res.json(books);
})

bookRouter.put("/update/:id", auth, async (req, res) => {
    try{
        await Book.findByIdAndUpdate(req.params.id, req.body);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
})

bookRouter.delete("/delete/:id", auth, async (req, res) => {
    try{
        await Book.findByIdAndRemove(req.params.id);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
})

module.exports = bookRouter;
