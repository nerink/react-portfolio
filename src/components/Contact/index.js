import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>We should CONNECT!</h1>
            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nerinkaur/">
                        https://www.linkedin.com/in/nerinkaur/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/nerink">
                    https://github.com/nerink
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:nerinkaur2@gmail.com">
                        nerinkaur2@gmail.com
                </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="Assets/Kaur,Nerin-Resume">
                        
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:555-555-5555">
                    555-555-5555
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;
