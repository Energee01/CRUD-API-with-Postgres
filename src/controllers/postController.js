const postService = require('../services/postService')


exports.addPost = async(req, res) => {
    try{

        const { title, postDate, userId} = req.body;
        const post = await postService.addPost(
            title,
            new Date(postDate),
            userId
        );
        res.status(201).json(post)

    }catch(e){
        res.status(400).json({error : e.message})
    }
}

exports.getAllPost = async(req, res) => {
    try{
        const posts = await postService.getAllPosts()
        res.json(posts)

    }catch(e){
        res.status(500).json({error : e.message})
    }
}

exports.getPostbyId = async(req, res) => {
    try{
        const postById = await postService.getSinglePost(parseInt(req.params.id))
        if(postById){
          res.json(postById)  
        } else{
            res.status(404).json({ message: 'Post not found'})
        }

    }catch(e){
        res.status(500).json({error : e.message})
    }
}

exports.updatePost = async(req, res) => {
    try{
        const {title} = req.body;
        const post = await postService.updatePost(parseInt(req.params.id), title)
        res.json(post)

    }catch(e){
        res.status(400).json({error : e.message})
    }
}

exports.deletePost = async(req, res) => {
    try{
        const deletedPost = await postService.deletePost(parseInt(req.params.id, 10))
        res.json({message: `Post ${deletedPost.id} successfully deleted`, post: deletedPost})


    }catch(e){
        if(e.code === 'P2025'){
            return res.status(404).json({message: `Post with id ${req.params.id} not found`})
        }
        res.status(500).json({error : e.message})
    }
}