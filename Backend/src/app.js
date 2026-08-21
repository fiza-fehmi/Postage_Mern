const express = require('express')
const cors = require('cors')
const multer =require('multer')
const postModel = require('./models/post')
const uploadFile = require('./services/storage')
const app =express()
app.use(cors())
app.use(express.json())
const upload = multer({storage:multer.memoryStorage()})
app.post('/create-post' , upload.single('image') , async(req ,res)=>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption

    })
    return res.status(201).json({
        message : "post created",
        post

    })
 
})

app.get('/posts' ,async(req,res)=>{
    const posts = await postModel.find()
    return res.status(200).json({
        message : 'posts fetched',
        posts

    })
})
app.get('/' ,(req ,res)=>{
    res.send('my new server')

})

module.exports =app