import { useState } from 'react'
import { MODALS } from '../config/modalsConfig'
import closeModal from '../utils/closeModal'
import { useAuth } from '../../../hooks/useAuth'
import useEnvConfigs from '../../../hooks/useEnvConfig'

export default function StreamNow() {
  const [streamTitle, setStreamTitle] = useState('')
  const [streamDescription, setStreamDescription] = useState('')
  const [allowChat, setAllowChat] = useState(true)

  const { user, token } = useAuth()
  const { createPublicRoomUrl } = useEnvConfigs()

  // Define the missing variables
  const maxParticipants = 2
  const tags = 'love'

  const handleStartStream = async () => {
    if (!user || !user.email || !token) {
      console.error('User not authenticated, email not available, or token not available.')
      return
    }

    // Validate required fields
    if (!streamTitle.trim()) {
      alert('Please enter a stream title')
      return
    }

    const ownerId = user.email

    // Use FormData for multipart/form-data as the API expects
    const formData = new FormData()
    formData.append('name', streamTitle)
    formData.append('owner_id', ownerId)
    formData.append('max_participants', maxParticipants.toString())
    formData.append('description', streamDescription)
    formData.append('tags', tags)

    // Debug log
    console.log('Creating room with data:', {
      name: streamTitle,
      owner_id: ownerId,
      max_participants: maxParticipants,
      description: streamDescription,
      tags: tags
    })

    try {
      const response = await fetch(createPublicRoomUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
          // Don't set Content-Type when using FormData - browser sets it automatically
        },
        body: formData
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error Response:', errorText)
        
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { message: errorText }
        }
        
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`)
      }

      const data = await response.json()
      console.log('Room created successfully:', data)
      
      // Navigate to the room using the sid from the response
      const roomId = data.sid || data.id
      if (roomId) {
        window.location.href = `/room/${roomId}`
      }
      
      closeModal(MODALS.STREAM_NOW.id)
    } catch (error) {
      console.error('Error creating room:', error)
      alert(`Failed to create stream: ${error.message}`)
    }
  }

  return (
    <div id={MODALS.STREAM_NOW.id} className="overlay">
      <div className="stream-now-modal-content">
        <div className="modal-header">
          <h2>Start Your Stream</h2>
          <span className="close-button" onClick={() => closeModal(MODALS.STREAM_NOW.id)}>
            &#x2715;
          </span>
        </div>

        <div className="modal-columns">
          <div className="modal-column left-column">
            <div className="cam-preview-box">
              <video id="webcam" autoPlay muted></video>
              <p className="cam-preview-text">Cam Preview</p>
            </div>

            <div className="device-selection">
              <label htmlFor="webcam-select" className="input-label">
                Webcam
              </label>
              <select id="webcam-select" className="stream-select">
                <option>Default</option>
              </select>

              <label htmlFor="microphone-select" className="input-label">
                Microphone
              </label>
              <select id="microphone-select" className="stream-select">
                <option>Default</option>
              </select>
            </div>
          </div>

          <div className="modal-column right-column">
            <div className="stream-form">
              <label htmlFor="stream-title" className="input-label">
                Title *
              </label>
              <input 
                type="text" 
                id="stream-title" 
                name="stream-title" 
                className="stream-input" 
                placeholder="Enter stream title" 
                value={streamTitle} 
                onChange={(e) => setStreamTitle(e.target.value)}
                required
              />

              <label htmlFor="stream-description" className="input-label">
                Description
              </label>
              <textarea 
                id="stream-description" 
                name="stream-description" 
                className="stream-textarea" 
                placeholder="Describe your stream" 
                value={streamDescription} 
                onChange={(e) => setStreamDescription(e.target.value)}
              ></textarea>

              <label className="input-label price-label">Price</label>
              <div className="price-section">
                <div className="novice-tag">
                  <span className="star-icon">&#9733;</span>
                  <span>Novice</span>
                </div>
                <div className="price-input-container">
                  <span className="currency-symbol">$</span>
                  <input 
                    type="text" 
                    id="stream-price" 
                    name="stream-price" 
                    className="price-input" 
                    value="5.99" 
                    readOnly 
                  />
                </div>
              </div>
              <p className="price-info">
                Prices vary by tier:
                <span className="tier beginner">Beginner</span>, 
                <span className="tier novice">Novice</span>, and 
                <span className="tier pro">Pro</span>
              </p>

              <div className="allow-chat-checkbox">
                <input 
                  type="checkbox" 
                  id="allow-chat" 
                  name="allow-chat" 
                  checked={allowChat} 
                  onChange={(e) => setAllowChat(e.target.checked)} 
                />
                <label htmlFor="allow-chat">Allow Chat</label>
              </div>

              <button 
                className="start-stream-button" 
                onClick={handleStartStream}
                disabled={!streamTitle.trim()}
              >
                Start Stream
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
