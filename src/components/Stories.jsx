import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
  const navigate = useNavigate();
  const [activeStory, setActiveStory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const stories = {
    govardhan: {
      title: "The Mountain Protector",
      subtitle: "When Krishna held up Govardhan",
      steps: [
        {
          title: "The Challenge",
          content: "Lord Indra, king of the gods, became angry when the people of Vrindavan stopped worshiping him. In his wrath, he summoned massive storm clouds to flood the village and punish its residents.",
          image: "🌩️",
        },
        {
          title: "Krishna's Solution",
          content: "Young Krishna, seeing the fear in the eyes of the villagers and animals, decided to protect them. Instead of fighting Indra directly, he uprooted the massive Govardhan Hill with just his little finger.",
          image: "🏔️"
        },
        {
          title: "The Shelter",
          content: "Krishna held the mountain aloft like a giant umbrella. All the residents of Vrindavan—people, cows, and other animals—took shelter underneath it, safe from the torrential rains and howling winds.",
          image: "☂️"
        },
        {
          title: "The Duration",
          content: "For seven days and seven nights, Krishna stood holding the mountain without moving, without eating or sleeping, completely focused on protecting his devotees.",
          image: "⏳"
        },
        {
          title: "Indra's Realization",
          content: "Finally, Lord Indra realized the divinity of Krishna and his own mistake. He called back the storms and clouds, and came to apologize to Krishna, showering Vrindavan with flowers instead of rain.",
          image: "🙏"
        },
        {
          title: "The Lesson",
          content: "This story teaches us that God protects those who have faith in him, and that pride (like Indra's) leads to downfall while humility leads to wisdom.",
          image: "📜"
        }
      ]
    },
    arjuna: {
      title: "The Divine Charioteer",
      subtitle: "Krishna's guidance to Arjuna",
      steps: [
        {
          title: "The Dilemma",
          content: "On the battlefield of Kurukshetra, the great warrior Arjuna faced a moral crisis. He saw his own teachers, relatives, and friends arrayed on the opposing side and lost the will to fight.",
          image: "⚔️"
        },
        {
          title: "The Request",
          content: "Arjuna turned to his friend and charioteer, Krishna, for guidance. 'O Krishna, my mind is confused about duty. I seek your guidance to help me decide what is right.'",
          image: "🗣️"
        },
        {
          title: "The Teaching",
          content: "Krishna then imparted the wisdom of the Bhagavad Gita, explaining the nature of the soul, the importance of doing one's duty without attachment to results, and the path to spiritual liberation.",
          image: "📖"
        },
        {
          title: "The Vision",
          content: "When Arjuna asked to see Krishna's universal form, Krishna granted him divine vision. Arjuna saw the entire universe within Krishna, with all beings and time itself contained within the Supreme Being.",
          image: "👁️"
        },
        {
          title: "The Resolution",
          content: "Arjuna's confusion vanished. He understood his duty as a warrior to fight for righteousness. With renewed determination, he took up his bow, ready to fulfill his destiny.",
          image: "🎯"
        },
        {
          title: "The Legacy",
          content: "The Bhagavad Gita, containing Krishna's teachings to Arjuna, remains one of the most important spiritual texts, guiding countless seekers on the path of righteousness and devotion.",
          image: "🌅"
        }
      ]
    }
  };

  const handleStorySelect = (storyKey) => {
    setActiveStory(storyKey);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < stories[activeStory].steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBackToStories = () => {
    setActiveStory(null);
    setCurrentStep(0);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(to bottom, #1a1a1a, #2d1b00)',
      color: '#f9d9a9',
      textAlign: 'center',
      fontFamily: '"Georgia", serif'
    }}>
      {/* Header Section */}
      <header>
        <h1 style={{
          fontSize: '3rem',
          margin: '0 0 0.5rem 0',
          background: 'linear-gradient(to right, #d4af37, #f9d9a9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: '"Trajan Pro", serif'
        }}>
          Krishna Katha
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.6',
          color: '#d4af37'
        }}>
          Divine stories of Lord Krishna, the supreme personality of godhead
        </p>
      </header>

      {!activeStory ? (
        /* Stories Selection View */
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem'
          }}>
            {/* Story 1: Krishna Lifting Govardhan */}
            <div 
              style={{
                background: 'linear-gradient(to bottom, #2d1b00, #1a1a1a)',
                borderRadius: '10px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '2px solid #d4af37',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => handleStorySelect('govardhan')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, #d4af37, #b8860b, #d4af37)'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                🏔️
              </div>
              <h2 style={{
                color: '#d4af37',
                marginTop: 0,
                borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                paddingBottom: '0.5rem',
                fontFamily: '"Trajan Pro", serif'
              }}>
                The Mountain Protector
              </h2>
              <p style={{ 
                lineHeight: '1.6', 
                textAlign: 'center',
                color: '#f9d9a9',
                fontStyle: 'italic'
              }}>
                When Krishna held up Govardhan
              </p>
              <div style={{
                marginTop: '1.5rem',
                color: '#b8860b',
                fontSize: '0.9rem'
              }}>
                Click to explore this story
              </div>
            </div>

            {/* Story 2: Krishna as Arjuna's Saarathi */}
            <div 
              style={{
                background: 'linear-gradient(to bottom, #2d1b00, #1a1a1a)',
                borderRadius: '10px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '2px solid #d4af37',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => handleStorySelect('arjuna')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, #d4af37, #b8860b, #d4af37)'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                🐎
              </div>
              <h2 style={{
                color: '#d4af37',
                marginTop: 0,
                borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                paddingBottom: '0.5rem',
                fontFamily: '"Trajan Pro", serif'
              }}>
                The Divine Charioteer
              </h2>
              <p style={{ 
                lineHeight: '1.6', 
                textAlign: 'center',
                color: '#f9d9a9',
                fontStyle: 'italic'
              }}>
                Krishna's guidance to Arjuna
              </p>
              <div style={{
                marginTop: '1.5rem',
                color: '#b8860b',
                fontSize: '0.9rem'
              }}>
                Click to explore this story
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Story Step View */
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 2rem',
          background: 'linear-gradient(to bottom, #2d1b00, #1a1a1a)',
          borderRadius: '10px',
          padding: '2rem',
          border: '2px solid #d4af37',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(to right, #d4af37, #b8860b, #d4af37)'
          }}></div>
          
          <button 
            onClick={handleBackToStories}
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: 'rgba(212, 175, 55, 0.2)',
              color: '#d4af37',
              border: '1px solid #d4af37',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backdropFilter: 'blur(5px)'
            }}
          >
            ← Back to Stories
          </button>
          
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}>
            {stories[activeStory].steps[currentStep].image}
          </div>
          
          <h2 style={{
            color: '#d4af37',
            marginTop: '0.5rem',
            fontFamily: '"Trajan Pro", serif',
            fontSize: '2rem'
          }}>
            {stories[activeStory].steps[currentStep].title}
          </h2>
          
          <h3 style={{
            color: '#f9d9a9',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            {stories[activeStory].title}
          </h3>
          
          <p style={{ 
            lineHeight: '1.8', 
            textAlign: 'center',
            color: '#f9d9a9',
            fontSize: '1.1rem',
            marginBottom: '2.5rem'
          }}>
            {stories[activeStory].steps[currentStep].content}
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
            <button 
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              style={{
                background: currentStep === 0 ? 'rgba(128, 128, 128, 0.2)' : 'linear-gradient(to bottom, #d4af37, #b8860b)',
                color: currentStep === 0 ? '#888' : '#1a1a1a',
                border: 'none',
                padding: '0.7rem 1.5rem',
                borderRadius: '5px',
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                opacity: currentStep === 0 ? 0.6 : 1
              }}
            >
              ← Previous
            </button>
            
            <div style={{
              color: '#d4af37',
              fontWeight: 'bold'
            }}>
              Step {currentStep + 1} of {stories[activeStory].steps.length}
            </div>
            
            <button 
              onClick={handleNextStep}
              disabled={currentStep === stories[activeStory].steps.length - 1}
              style={{
                background: currentStep === stories[activeStory].steps.length - 1 ? 'rgba(128, 128, 128, 0.2)' : 'linear-gradient(to bottom, #d4af37, #b8860b)',
                color: currentStep === stories[activeStory].steps.length - 1 ? '#888' : '#1a1a1a',
                border: 'none',
                padding: '0.7rem 1.5rem',
                borderRadius: '5px',
                cursor: currentStep === stories[activeStory].steps.length - 1 ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                opacity: currentStep === stories[activeStory].steps.length - 1 ? 0.6 : 1
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => navigate('/explore')}
          style={{
            background: 'linear-gradient(to bottom, #d4af37, #b8860b)',
            color: '#1a1a1a',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 0.5rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            fontFamily: '"Georgia", serif'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          ← Back to Explore
        </button>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(to bottom, #444, #222)',
            color: '#f9d9a9',
            border: '1px solid #d4af37',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 0.5rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            fontFamily: '"Georgia", serif'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          Back to Home
        </button>
      </div>
   </div>
  );
};

export default Stories;