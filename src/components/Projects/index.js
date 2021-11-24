import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/health-fusion.png`} className="card-img-top border-bottom"
                                alt="" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Project 3</h3>
                            <p className="card-text">
                            Health Fusion is a user-friendly IT health blog  application will allow users to share their most innovative and intimate ideas. Other users can build on those ideas by adding their input.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: React,Apollo,MongoDB,Express,Node.js,Heroku,GraphQL
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://health-fusion1284.herokuapp.com" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/utor2021/health-fusion" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weather-dashboard.png`} className="card-img-top border-bottom"
                                alt=" Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                                Weather app that provides weather forecasts in cities.
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
                            <img src={`${process.env.PUBLIC_URL}/assets/images/code-quiz.png`} className="card-img-top border-bottom"
                                alt="Code Quiz" />
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
