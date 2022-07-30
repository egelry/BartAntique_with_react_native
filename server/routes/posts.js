const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json(err)
    }
})

//get post by id
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})

//remove post by id
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndRemove(req.params.postId)
        res.json(removedPost)
    } catch (err) {
        res.json(err)
    }
})



//update item by id
router.put('/:postId', async (req, res) => {
    const post = new Post({
        image: req.body.image,
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        value: req.body.value,
        current: req.body.current


    });
    try {
        Post.findByIdAndUpdate(req, params.postId, post)
    }
    catch (err) {
        res.json("err : " + err)
    }
})

//post item
router.post('/', async (req, res) => {
    const post = new Post({
        image: req.body.image,
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        value: req.body.value,
        current: true


    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (err) {
        res.json(err);

    }

})



module.exports = router