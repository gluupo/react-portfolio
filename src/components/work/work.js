import React from 'react';
import './assets/work.css'

export default function Work() {
    return (
        <div className="mb-4">
            <div className="row justify-content-center m-auto col-11 col-lg-6 mt-4" id="gamerReviewConnectContainer">
                <div className="col-12 p-4 text-white rounded-3 mb-1 p-1" id="gamerReviewConnect">
                    <div className="col-md-6 px-0">
                        <h1 className="display-5 fst-italic">gamer review connect</h1>
                        <p className="lead my-3">a full stack, responsive video game review site</p>
                        <p className="lead mb-0"><a href="https://github.com/gluupo/gamer-connect-reviews" className="btn btn-transparent border lead mb-0 mt-2 text-white fw-bold text-white fw-bold">github link</a></p>
                        <p className="lead mb-0"><a href="https://gamer-connect-123789.herokuapp.com/" className="btn btn-transparent border lead mb-0 mt-1 text-white fw-bold">deployed link</a></p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="codeQuiz">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-dark">code quiz</h3>
                            <p className="mb-auto text-dark p-1 mb-3">a coding quiz made with javascript</p>
                            <p className="lead mb-0"><a href="https://github.com/gluupo/code-quiz" className="btn btn-transparent border-dark lead mb-0 mt-2 text-dark fw-bold">github link</a></p>
                            <p className="lead mb-0"><a href="https://gluupo.github.io/code-quiz/" className="btn btn-transparent border-dark lead mb-0 mt-1 text-dark fw-bold">deployed link</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="weatherTunes">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-light">weather tunes</h3>
                            <p className="mb-auto text-light p-1 mb-3">song recs based on the weather</p>
                            <p className="lead mb-0"><a href="https://github.com/dcrlsn/weather-tunes" className="btn btn-transparent border lead mb-0 mt-2 text-white fw-bold text-white fw-bold">github link</a></p>
                            <p className="lead mb-0"><a href="https://dcrlsn.github.io/weather-tunes/" className="btn btn-transparent border lead mb-0 mt-1 text-white fw-bold">deployed link</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="dayScheduler">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-dark">work day scheduler</h3>
                            <p className="mb-auto text-dark p-1 mb-3">work day planner made with js</p>
                            <p className="lead mb-0"><a href="https://github.com/gluupo/code-quiz" className="btn btn-transparent border-dark lead mb-0 mt-2 text-dark fw-bold">github link</a></p>
                            <p className="lead mb-0"><a href="https://gluupo.github.io/code-quiz/" className="btn btn-transparent border-dark lead mb-0 mt-1 text-dark fw-bold">deployed link</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="teamGenerator">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-light">team generator</h3>
                            <p className="mb-auto text-light p-1 mb-3">command line app that generates a team based on user input</p>
                            <p className="lead mb-0"><a href="https://github.com/gluupo/team-profile-generator" className="btn btn-transparent border lead mb-0 mt-2 text-white fw-bold">github link</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="employeeTracker">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-light">employee tracker</h3>
                            <p className="mb-auto text-light p-1 mb-3">command line app that keeps track of business information</p>
                            <p className="lead mb-0"><a href="https://github.com/gluupo/employee-tracker" className="btn btn-transparent border lead mb-0 mt-2 text-white fw-bold">github link</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-1">
                    <div className="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative rounded-3 h-100" id="noteTaker">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-2 fst-italic text-light">note taker</h3>
                            <p className="mb-auto text-light p-1 mb-3">note taker app made with express and javascript</p>
                            <p className="lead mb-0"><a href="https://github.com/gluupo/express-note-taker" className="btn btn-transparent border lead mb-0 mt-2 text-white fw-bold">github link</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}