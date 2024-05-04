import React from 'react';
import Logo from './moqah.svg';
import './style.css';  // Import the CSS for styling
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


function ComingSoon() {
  console.log("Imported logo path: ", Logo); // This will show the path or data URL for the SVG
  return (
    <div className="coming-soon-page">
    <header className="coming-soon-header">
      <img src={Logo} alt="Logo" className="logo" />
      <p className="coming-soon-text">Moqah.pk</p>
    </header>
    <main className="content-area">
     <p className="middle-text">Coming Soon !!!</p>
     <p className="additional-text">The features that you are looking for are coming soon</p>
     <p className="follow-text">Follow us on</p>
     <div className="social-links">
          <a href="https://www.instagram.com/moqah.pk" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
     </div>
    </main>
    <footer className="coming-soon-footer">
      {/* Footer content goes here */}
    </footer>
  </div>
  );
}

export default ComingSoon;
