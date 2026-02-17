import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

const Research = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setPosts(data)
    }

    setLoading(false)
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Research</h1>
          <p className="text-xl text-gray-600">
            Explore our latest research and policy insights.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-500">Loading research...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No research published yet.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center p-8">

                  {/* LEFT SIDE — A4 Image */}
                  <div className="flex justify-center">
                    {post.featured_image && (
                      <div className="w-[260px] h-[360px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE — Content */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {post.title}
                    </h2>
                    <h3 className='text-xl font-bold mb-5 text-[#9A4221]'>
                      {post.published_in}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.summary}
                    </p>

                    <button
                      onClick={() => navigate(`/research/${post.slug}`)}
                      className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition"
                    >
                      Read More
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        )}

      </div>
    </div>
  )
}

export default Research
