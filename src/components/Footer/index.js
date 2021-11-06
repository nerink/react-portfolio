import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nerinkaur/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nerink">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:nerinkaur2@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/assets/Kaur,Nerin-Resume.pdf">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:555-555-5555">
                <i class="fas fa-phone-volume"></i>
            </a><p>Copyright © Nerin Kaur | NK</p>
        </footer>
    )
}

export default Footer
