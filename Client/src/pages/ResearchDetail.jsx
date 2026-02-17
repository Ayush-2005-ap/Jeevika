import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const ResearchDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error(error)
    } else {
      setPost(data)
    }

    setLoading(false)
  }

  if (loading) return <p className="text-center mt-32">Loading...</p>
  if (!post) return <p className="text-center mt-32">Research not found.</p>

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="section-container max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        {post.featured_image && (
          <div className="mb-8">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full max-h-[600px] object-contain rounded-xl"
            />
          </div>
        )}

        <div className="text-gray-700 leading-8 whitespace-pre-line mb-8">
          {post.content}
        </div>

        {post.pdf_url && (
          <a
            href={post.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Download Full Report
          </a>
        )}

      </div>
    </div>
  )
}

export default ResearchDetail
