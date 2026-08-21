import React, { useState ,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [post, setPost] = useState([
    {
      _id: '1',
      image:
        'https://images.unsplash.com/photo-1786288042250-1258f5839eaf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Awesome Scenery',
    },
  ])

  useEffect(()=>{
    axios.get('http://localhost:5000/posts')
    .then((res)=>{
        setPost(res.data.posts)
    })
  } ,[])

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-5 sm:px-6">
      
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-3 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Feed
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover the latest posts
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {post.length > 0 ? (
            post.map((post) => (
              <article
                key={post._id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
              >
                {/* Image */}
                <div className="w-full  bg-gray-100">
                  <img
                    className="h-64 w-full object-contain  sm:h-80 md:h-96"
                    src={post.image}
                    alt={post.caption}
                  />
                </div>

                {/* Caption */}
                <div className="px-5 py-4">
                  <p className="text-sm sm:text-base font-medium text-gray-800">
                    {post.caption}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-2xl bg-white p-10 text-center shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">
                No Posts Available
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Create your first post to see it here.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Feed