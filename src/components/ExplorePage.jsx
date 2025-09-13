// src/components/ExplorePage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ExplorePage.css'

const ExplorePage = () => {
  const navigate = useNavigate()

  return (
    <div className="explore-page">
      <div className="background-overlay"></div>
      
      <div className="explore-content">
        <h1>Explore the Mahabharat</h1>
        <p className="subtitle">Choose an aspect to explore</p>
        
        <div className="options-container">
          <div 
            className="explore-option family-tree-option"
            onClick={() => navigate('/family-tree')}
          >
            <div className="option-icon">🌳</div>
            <h2>Family Tree</h2>
            <p>Discover the lineage from King Shantanu to the Pandavas</p>
          </div>
          
          <div 
            className="explore-option characters-option"
            onClick={() => navigate('/characters')}
          >
            <div className="option-icon">👑</div>
            <h2>Krishna Katha</h2>
            <p>Divine Encounter</p>
          </div>
        </div>
        
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default ExplorePage