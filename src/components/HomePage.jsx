import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const [showContent, setShowContent] = useState(false)
   const navigate = useNavigate()

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleExploreClick = () => {
      navigate('/explore')
    // In a real app, this would navigate to another page
  }

  return (
    <div className="homepage">
      <div className="background-overlay"></div>
      
      <div className="content">
        <div className={`title-container ${showContent ? 'visible' : ''}`}>
          <h1 className="title">MAHABHARAT</h1>
          <h2 className="subtitle">The Mother of All Wars</h2>
    </div>

        <div className={`symbols ${showContent ? 'visible' : ''}`}>
           <div className="symbol">
                <img src="/maces.png" alt="Conflict"/>
           </div>
           <div className="symbol">
                <img src="/shield.png" alt="Protection"/>
           </div>
           <div className="symbol">
                <img src="/scroll.png" alt="Knowledge"/>
           </div>
           <div className="symbol">
                <img src="/elephant.png" alt="Power"/>
           </div>
    </div>
        <div className={`description ${showContent ? 'visible' : ''}`}>
          <p>
            An epic tale of duty, honor, and destiny. The great Kurukshetra War that shaped 
            the course of history, where gods and mortals clashed in the ultimate battle 
            between righteousness and ambition.
          </p>
        </div>

        <button 
          className={`explore-btn ${showContent ? 'visible' : ''}`}
          onClick={handleExploreClick}
        >
          EXPLORE THE EPIC
        </button>
      </div>

      <div className="fire-animation"></div>
    </div>
  )
}

export default HomePage