import React, { useState } from 'react';
import Navigation from './nav/nav';
import About from './about/about';
import Work from './work/work'
import Contact from './contact/contact';
import Footer from './footer/footer';

// an if statement that renders each corresponding page
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('about');

    const renderPage = () => {
        if (currentPage === 'work') {
            return <Work />;
        }
        if (currentPage === 'about') {
            return <About />;
        }

        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* // passing currentPage and handlePageChange as props */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
