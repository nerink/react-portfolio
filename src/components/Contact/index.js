import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>We should CONNECT!</h1>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86094.7119870131!2d-122.22117132685327!3d47.597749393211615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bcfa3a66041%3A0xbacf5482ead00765!2sBellevue%2C%20WA!5e0!3m2!1sen!2sus!4v1615676688335!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

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
