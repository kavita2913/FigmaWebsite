import React from 'react';
import './footer.scss';
import ArrowDown from '../Image/ArrowDown.png';

const Footer = () => {
    return (
        <div className="main">
            <div className="Footcontainer">
                <div className="list1">
                    <ol>
                        <li>
                            <h4>Categories</h4>
                        </li>
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ol>
                </div>
                <div className="list2">
                    <ol>
                        <li>
                            <h4>Contact</h4>
                        </li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>About</li>
                    </ol>
                </div>
                <div className='united'>
                    <h4>United States</h4>
                    <img src={ArrowDown} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
