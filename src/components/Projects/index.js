import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/`} className="card-img-top border-bottom"
                                alt="" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Project 1</h3>
                            <p className="card-text">
                                Info on Project 1 
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: 
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/nerink" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/`} className="card-img-top border-bottom"
                                alt="" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Project 2</h3>
                            <p className="card-text">
                                Text Description 
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: 
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="heroku" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/nerink" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/`} className="card-img-top border-bottom"
                            alt="" />
                        <div className="card-body mb-5 pl-0">
                            <h3>Corona Date</h3>
                            <p className="card-text">
                                Description
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: 
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/nerink" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weatherdashboard-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                                Weather app that provides current and future weather forecasts in cities.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile
                                    responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/nerink" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/nerink" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/codequiz-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Code Quiz" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Code Quiz</h3>
                            <p className="card-text">
                                A timed quiz on JavaScript fundamentals.
                        </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/nerink" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/nerink" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
