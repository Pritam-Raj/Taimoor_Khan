import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/academicexperience">Academic Experience</Link>
        <Link to="/administrativeexperience">Administrative Experience</Link>
        <Link to="/awardsandhonors">Awards and Honors</Link>
        <Link to="/editorialactivites">Editorial Activities</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/ieee">IEEE</Link>
        <Link to="/invitedtalks">Invited Talks</Link>
        <Link to="/professional">Professional</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/researchcollaborations">Research Collaborations</Link>
        <Link to="/sponsoredprojects">Sponsored Projects</Link>
        <Link to="/supervision">Supervision</Link>
      </div>
    </div>
  );
};

export default Navbar;
