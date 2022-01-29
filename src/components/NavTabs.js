import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are able to extract them from the PortfolioContainer.js

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs navbar-dark">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // a click event that runs through a ternary operator indicating if about is the current page 

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          // a click event that runs through a ternary operator indicating if contact is the current page 

          onClick={() => handlePageChange('contact')}
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
