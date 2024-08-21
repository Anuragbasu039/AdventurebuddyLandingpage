import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer" id='contact'>
            <div className="footer-column explore">
                <h3 className="vertical-heading">Explore</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    <li>Refund & Cancellation</li>
                </ul>
            </div>
            <div className="footer-column quick-links">
                <h3 className="vertical-heading">Quick Links</h3>
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='#about'><li>About</li></a>
                    <a href='#gallary'><li>Gallary</li></a>
                    <a href='#offer'><li>Activities</li></a>
                    <a href='#contact'><li>Contact us</li></a>
                </ul>
            </div>
            <div className="footer-column address">
                <h3 className="vertical-heading">Address</h3>
                <address>
                    RISE Incubation Center, Nagar Nigam Premises,<br/>
                    Elite Chauraha, Civil Lines, Jhansi (U.P.)<br/>
                    Email: connect@theadventurebuddy.in<br/>
                    Phone: +91 9335891913
                </address>
                <div className="social-icons">
                    <a href="https://x.com/adventurebuddy1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.facebook.com/adventurebuddy01" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/adventurebuddy01/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                © 2024 AdventureBuddy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
