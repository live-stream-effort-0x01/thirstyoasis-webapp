import { useState, useEffect } from 'react'
import scrollTags from './utils/scrollTags'

interface TagResponse {
  tags: string[]
}

export default function TagsContainer() {
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://dev-room-manager.demothesoftwarepls.site/api/v1/tag/list', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            // Remove Authorization header temporarily to test
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: TagResponse = await response.json()
        setTags(data.tags)
      } catch (error) {
        console.error('Failed to fetch tags:', error)
        setError('Failed to load tags')
      } finally {
        setLoading(false)
      }
    }

    fetchTags()
  }, [])

  if (loading) {
    return <div className="tags-container">Loading tags...</div>
  }

  if (error) {
    return <div className="tags-container">Error: {error}</div>
  }

  return (
    <div className="tags-container">
      <button className="tags-prev" onClick={() => scrollTags(-1)}>
        &#10094;
      </button>
      <div className="tags">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))
        ) : (
          <span className="tag">No tags available</span>
        )}
      </div>
      <button className="tags-next" onClick={() => scrollTags(1)}>
        &#10095;
      </button>
    </div>
  )
}
