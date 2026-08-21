import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const navigate =useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const formData = new FormData (e.target)
    axios.post('http://localhost:5000/create-post' ,formData)
    .then((res)=>{
      navigate('/Feed')
    })

    .catch((err) =>{
      console.log(err)
      alert('error in creating post')
    })
  }
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Create Post
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Share an image and add a caption to your post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Image
            </label>

            <label className="flex flex-col items-center justify-center w-full h-44 sm:h-52 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
              
              <div className="text-center px-4">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm font-medium text-gray-700">
                  Click to upload an image
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, JPEG or WEBP
                </p>
              </div>

              <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                
              />
            </label>
          </div>

          {/* Caption */}
          <div>
            <label
              htmlFor="caption"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Caption
            </label>

            <textarea
              id="caption"
              name="caption"
              placeholder="Write something about your post..."
              required
              rows="4"
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Create Post
          </button>

        </form>
      </div>

    </section>
  )
}

export default CreatePost