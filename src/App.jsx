import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AcademicExperience from './pages/AcademicExperience.jsx'
import AdministrativeExperience from './pages/AdministrativeExperience.jsx'
import AwardsAndHonors from './pages/AwardsAndHonors.jsx'
import EditorialActivites from './pages/EditorialActivites.jsx'
import Education from './pages/Education.jsx'
import Gallery from './pages/Gallery.jsx'
import IEEE from './pages/IEEE.jsx'
import InvitedTalks from './pages/InvitedTalks.jsx'
import Professional from './pages/Professional.jsx'
import Publications from './pages/Publications.jsx'
import ResearchCollaborations from './pages/ResearchCollaborations.jsx'
import SponsoredProjects from './pages/SponsoredProjects.jsx'
import Supervision from './pages/Supervision.jsx'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/academicexperience' element={<AcademicExperience/>}/>
          <Route path='/administrativeexperience' element={<AdministrativeExperience/>}/>
          <Route path='/awardsandhonors' element={<AwardsAndHonors/>}/>
          <Route path='/editorialactivites' element={<EditorialActivites/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/ieee' element={<IEEE/>}/>
          <Route path='/invitedtalks' element={<InvitedTalks/>}/>
          <Route path='/professional' element={<Professional/>}/>
          <Route path='/publications' element={<Publications/>}/>
          <Route path='/researchcollaborations' element={<ResearchCollaborations/>}/>
          <Route path='/sponsoredprojects' element={<SponsoredProjects/>}/>
          <Route path='/supervision' element={<Supervision/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App