// src/components/FamilyTree.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FamilyTree.css';

const FamilyTree = () => {
  const navigate = useNavigate();
  const [currentMember, setCurrentMember] = useState('shantanu');
  const [transition, setTransition] = useState('');
  const [history, setHistory] = useState(['shantanu']); // Track navigation history

  const familyData = {
    shantanu: {
      name: "King Shantanu",
      title: "Ruler of Hastinapur",
      description: "The king of Hastinapur and father of Bhishma",
      wives: [
        {
          id: "ganga",
          name: "Ganga",
          children: [
            { 
              id: "bhishma",
              name: "Bhishma (Devavrata)", 
              description: "Eldest son, took vow of celibacy",
            }
          ]
        },
        {
          id: "satyavati",
          name: "Satyavati",
          children: [
            { 
              id: "chitrangada",
              name: "Chitrangada", 
              description: "Died young in battle",
            },
            { 
              id: "vichitravirya",
              name: "Vichitravirya", 
              description: "Became king after Chitrangada",
            }
          ]
        }
      ]
    },
    vichitravirya: {
      name: "Vichitravirya",
      title: "King of Hastinapur",
      description: "Younger son of Shantanu and Satyavati",
      wives: [
        {
          id: "ambika",
          name: "Ambika",
          children: [
            { 
              id: "dhritarashtra",
              name: "Dhritarashtra", 
              description: "Born blind, father of Kauravas",
            }
          ]
        },
        {
          id: "ambalika",
          name: "Ambalika",
          children: [
            { 
              id: "pandu",
              name: "Pandu", 
              description: "Father of Pandavas",
            }
          ]
        }
      ]
    },
    dhritarashtra: {
      name: "Dhritarashtra",
      title: "King of Hastinapur (Regent)",
      description: "Father of the Kauravas",
      wives: [
        {
          id: "gandhari",
          name: "Gandhari",
          children: [
            { 
              id: "duryodhana",
              name: "Duryodhana", 
              description: "Eldest Kaurava, main antagonist",
              ended: "Killed by Bhima in the Kurukshetra War"
            },
            { 
              id: "dushasana",
              name: "Dushasana", 
              description: "Second Kaurava",
              ended: "Killed by Bhima in the Kurukshetra War"
            },
            { 
              id: "dussala",
              name: "Dussala", 
              description: "Only daughter",
              ended: "Survived the war and became queen of Sindhu"
            },
            { 
              id: "yuyutsu",
              name: "Yuyutsu", 
              description: "Son of Dhritarashtra and a maid",
              ended: "Only Kaurava to survive the war, ruled Hastinapur for a while"
            }
          ]
        }
      ]
    },
    pandu: {
      name: "Pandu",
      title: "King of Hastinapur",
      description: "Father of the Pandavas",
      ended: "Died due to a curse when he attempted intimacy with Madri",
      wives: [
        {
          id: "kunti",
          name: "Kunti",
          children: [
            { 
              id: "yudhishthira",
              name: "Yudhishthira", 
              description: "Dharmaraj, eldest Pandava",
            },
            { 
              id: "bhima",
              name: "Bhima", 
              description: "Strongest Pandava",
            },
            { 
              id: "arjuna",
              name: "Arjuna", 
              description: "Greatest archer",
            }
          ]
        },
        {
          id: "madri",
          name: "Madri",
          children: [
            { 
              id: "nakula",
              name: "Nakula", 
              description: "Master of swordsmanship",
            },
            { 
              id: "sahadeva",
              name: "Sahadeva", 
              description: "Master of astrology",
            }
          ]
        }
      ]
    },
    yudhishthira: {
      name: "Yudhishthira",
      title: "King of Hastinapur",
      description: "Eldest Pandava, known for his righteousness",
      ended: "Ascended to heaven with his brothers after ruling for many years",
      wives: [
        {
          id: "draupadi",
          name: "Draupadi",
          children: [
            { 
              id: "prativindhya",
              name: "Prativindhya", 
              description: "Eldest son of Yudhishthira",
              ended: "Killed by Ashwatthama during the night attack after the war"
            }
          ]
        },
        {
          id: "devika",
          name: "Devika",
          children: [
            { 
              id: "yaudheya",
              name: "Yaudheya", 
              description: "Son of Yudhishthira and Devika",
              ended: "Became king of a small kingdom"
            }
          ]
        }
      ]
    },
    bhima: {
      name: "Bhima",
      title: "Pandava Prince",
      description: "Strongest of the Pandavas",
      ended: "Ascended to heaven with his brothers",
      wives: [
        {
          id: "draupadi_bhima",
          name: "Draupadi",
          children: [
            { 
              id: "sutasoma",
              name: "Sutasoma", 
              description: "Son of Bhima and Draupadi",
              ended: "Killed by Ashwatthama during the night attack after the war"
            }
          ]
        },
        {
          id: "hidimbi",
          name: "Hidimbi",
          children: [
            { 
              id: "ghatotkacha",
              name: "Ghatotkacha", 
              description: "Son of Bhima and Hidimbi, half-rakshasa",
              ended: "Killed by Karna during the Kurukshetra War using Vasavi Shakti"
            }
          ]
        },
        {
          id: "valandhara",
          name: "Valandhara",
          children: [
            { 
              id: "sarvaga",
              name: "Sarvaga", 
              description: "Son of Bhima and Valandhara",
              ended: "Became king of Kashi"
            }
          ]
        }
      ]
    },
    arjuna: {
      name: "Arjuna",
      title: "Pandava Prince",
      description: "Greatest archer and central character of Bhagavad Gita",
      ended: "Ascended to heaven with his brothers",
      wives: [
        {
          id: "draupadi_arjuna",
          name: "Draupadi",
          children: [
            { 
              id: "srutakarma",
              name: "Srutakarma", 
              description: "Son of Arjuna and Draupadi",
              ended: "Killed by Ashwatthama during the night attack after the war"
            }
          ]
        },
        {
          id: "subhadra",
          name: "Subhadra",
          children: [
            { 
              id: "abhimanyu",
              name: "Abhimanyu", 
              description: "Son of Arjuna and Subhadra",
              ended: "Killed by multiple Kaurava warriors on the 13th day of war"
            }
          ]
        },
        {
          id: "chitrangada_arjuna",
          name: "Chitrangada",
          children: [
            { 
              id: "babruvahana",
              name: "Babruvahana", 
              description: "Son of Arjuna and Chitrangada",
              ended: "Became king of Manipura"
            }
          ]
        },
        {
          id: "ulupi",
          name: "Ulupi",
          children: [
            { 
              id: "iravan",
              name: "Iravan", 
              description: "Son of Arjuna and Ulupi",
              ended: "Sacrificed himself to Goddess Kali for Pandava victory"
            }
          ]
        }
      ]
    },
    nakula: {
      name: "Nakula",
      title: "Pandava Prince",
      description: "Master of swordsmanship and horsemanship",
      ended: "Ascended to heaven with his brothers",
      wives: [
        {
          id: "draupadi_nakula",
          name: "Draupadi",
          children: [
            { 
              id: "shatanika",
              name: "Shatanika", 
              description: "Son of Nakula and Draupadi",
              ended: "Killed by Ashwatthama during the night attack after the war"
            }
          ]
        },
        {
          id: "karenumati",
          name: "Karenumati",
          children: [
            { 
              id: "niramitra",
              name: "Niramitra", 
              description: "Son of Nakula and Karenumati",
              ended: "Became king of a small kingdom"
            }
          ]
        }
      ]
    },
    sahadeva: {
      name: "Sahadeva",
      title: "Pandava Prince",
      description: "Master of astrology and swordsmanship",
      ended: "Ascended to heaven with his brothers",
      wives: [
        {
          id: "draupadi_sahadeva",
          name: "Draupadi",
          children: [
            { 
              id: "shrutasena",
              name: "Shrutasena", 
              description: "Son of Sahadeva and Draupadi",
              ended: "Killed by Ashwatthama during the night attack after the war"
            }
          ]
        },
        {
          id: "vijaya",
          name: "Vijaya",
          children: [
            { 
              id: "sughana",
              name: "Sughana", 
              description: "Son of Sahadeva and Vijaya",
              ended: "Became king of a small kingdom"
            }
          ]
        }
      ]
    },
    abhimanyu: {
      name: "Abhimanyu",
      title: "Prince of Hastinapur",
      description: "Son of Arjuna and Subhadra, married to Uttara",
      ended: "Killed on the 13th day of the Kurukshetra War when he was surrounded by multiple Kaurava warriors",
      wives: [
        {
          id: "uttara",
          name: "Uttara",
          children: [
            { 
              id: "parikshit",
              name: "Parikshit", 
              description: "Son of Abhimanyu and Uttara, born after Abhimanyu's death",
            }
          ]
        }
      ]
    },
    parikshit: {
      name: "Parikshit",
      title: "King of Hastinapur",
      description: "Grandson of Arjuna, successor of Yudhishthira",
      ended: "Died from Takshaka's snake bite after being cursed by a sage",
      wives: [
        {
          id: "madravati",
          name: "Madravati",
          children: [
            { 
              id: "janamejaya",
              name: "Janamejaya", 
              description: "Son of Parikshit, performed the snake sacrifice",
            }
          ]
        }
      ]
    },
    janamejaya: {
      name: "Janamejaya",
      title: "King of Hastinapur",
      description: "Son of Parikshit, performed the Sarpa Satra (snake sacrifice)",
      ended: "Ruled Hastinapur for many years before passing the throne to his descendants",
      wives: [
        {
          id: "vapushtama",
          name: "Vapushtama",
          children: [
            { 
              id: "satanika",
              name: "Satanika", 
              description: "Son of Janamejaya, succeeded him as king",
            }
          ]
        }
      ]
    },
    // Additional members without lineage
    bhishma: {
      name: "Bhishma (Devavrata)",
      title: "Grandsire of Kuru Dynasty",
      description: "Eldest son of Shantanu and Ganga, took vow of celibacy",
      ended: "Fell in the Kurukshetra War, lying on a bed of arrows for 58 days until his chosen time of death",
      noLineage: true,
      noLineageReason: "Took a vow of lifelong celibacy to allow his father to marry Satyavati"
    },
    chitrangada: {
      name: "Chitrangada",
      title: "King of Hastinapur",
      description: "Elder son of Shantanu and Satyavati",
      ended: "Died in a battle with a Gandharva of the same name",
      noLineage: true,
      noLineageReason: "Died young without marrying or having children"
    },
    duryodhana: {
      name: "Duryodhana",
      title: "Eldest Kaurava",
      description: "Main antagonist of the Mahabharata",
      ended: "Killed by Bhima in the Kurukshetra War",
      noLineage: true,
      noLineageReason: "All his children were killed by Ashwatthama's divine weapon during the war"
    },
    dushasana: {
      name: "Dushasana",
      title: "Kaurava Prince",
      description: "Second son of Dhritarashtra",
      ended: "Killed by Bhima who drank his blood in revenge for Draupadi's humiliation",
      noLineage: true,
      noLineageReason: "Died without heirs in the Kurukshetra War"
    }
  };

  const handleMemberClick = (memberId) => {
    if (familyData[memberId]) {
      setTransition('fade-out');
      setTimeout(() => {
        setCurrentMember(memberId);
        setHistory([...history, memberId]);
        setTransition('fade-in');
      }, 300);
    }
  };

  const handleWifeClick = (wife) => {
    if (wife.children && wife.children.length > 0) {
      setTransition('fade-out');
      setTimeout(() => {
        setCurrentMember(wife.children[0].id);
        setHistory([...history, wife.children[0].id]);
        setTransition('fade-in');
      }, 300);
    }
  };

  const handleBackClick = () => {
    if (history.length > 1) {
      setTransition('fade-out');
      setTimeout(() => {
        const newHistory = [...history];
        newHistory.pop(); // Remove current
        const previousMember = newHistory[newHistory.length - 1];
        setCurrentMember(previousMember);
        setHistory(newHistory);
        setTransition('fade-in');
      }, 300);
    }
  };

  const renderFamilyMember = () => {
    const member = familyData[currentMember];
    if (!member) return null;

    return (
      <div className={`member-center ${transition}`}>
        <div className="main-member king-node">
          <div className="member-image">
            <div className="member-initial">{member.name.charAt(0)}</div>
          </div>
          <h3>{member.name}</h3>
          <p className="member-title">{member.title}</p>
          <p className="member-description">{member.description}</p>
          {member.ended && (
            <div className="member-ended">
              <strong>How it ended: </strong>{member.ended}
            </div>
          )}
        </div>

        {member.noLineage ? (
          <div className="no-lineage-message">
            <h4>No Direct Lineage</h4>
            <p>{member.noLineageReason}</p>
          </div>
        ) : (
          <>
            {member.wives && member.wives.length > 0 && (
              <div className="wives-container">
                {member.wives.map((wife, index) => (
                  <div key={wife.id} className="wife-connection">
                    <div className="connector-line"></div>
                    <div 
                      className="wife-node queen-node"
                      onClick={() => handleWifeClick(wife)}
                    >
                      <div className="member-image">
                        <div className="member-initial">{wife.name.charAt(0)}</div>
                      </div>
                      <h4>{wife.name}</h4>
                      
                      {wife.children && wife.children.length > 0 && (
                        <div className="children-container">
                          {wife.children.map((child, childIndex) => (
                            <div key={child.id} className="child-connection">
                              <div className="connector-line"></div>
                              <div 
                                className={`child-node ${familyData[child.id] && !familyData[child.id].noLineage ? 'has-children' : 'no-children'}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMemberClick(child.id);
                                }}
                              >
                                <div className="member-image">
                                  <div className="member-initial">{child.name.charAt(0)}</div>
                                </div>
                                <h5>{child.name}</h5>
                                <p>{child.description}</p>
                                {child.ended && (
                                  <p className="child-ended">{child.ended}</p>
                                )}
                                {familyData[child.id] && (
                                  <div className="expand-indicator">
                                    <span>▼</span>
                                  </div>
                                )}
                              </div>
                            </div>
                                                    ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="family-tree-container">
      <div className="header">
        <button className="back-button" onClick={handleBackClick} disabled={history.length <= 1}>
          ← Back
        </button>
        <h1>Mahabharata Family Tree</h1>
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
      </div>
      
      <div className="family-tree">
        {renderFamilyMember()}
      </div>
      
      <div className="navigation-info">
        <p>Click on any family member to explore their lineage</p>
      </div>
    </div>
  );
};

export default FamilyTree;