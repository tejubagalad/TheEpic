import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExplorePage from './components/ExplorePage';
import FamilyTree from './components/FamilyTree';
import Stories from './components/Stories';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/family-tree" element={<FamilyTree />} />
            <Route path="/characters" element={<Stories />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App