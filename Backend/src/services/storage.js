const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit ({
    privateKey : process.env.ImageKit_Private_key
})


const uploadFile =async (buffer) =>{
    const result = await imagekit.files.upload({
        file : buffer.toString('base64'),
        fileName : "my_Image"
    })
    return result
}

module.exports = uploadFile