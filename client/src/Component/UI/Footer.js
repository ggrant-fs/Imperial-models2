import { Fragment } from 'react';
import React from 'react';
import './Footer.css';

const Footer = (props) =>{
    return (
        <Fragment>
          <footer className='main-footer'>
            <h2 className="main-footer__title">Imperial Models</h2>
            <div className="items-container">
              <ul>
                <li className="footer__item">Newsletter</li>
                <li className="footer__item">Fashion</li>
                <li className="footer__item">About</li>
                <li className="footer__item">Contact Us</li>
                <li className="footer__item">Subscribe</li>
              </ul>
            </div>
            <div className="items-container">
             <ul>
              <li className="footer__item">Fashion</li>
              <li className="footer__item">Runway</li>
              <li className="footer__item">Milan</li>
              <li className="footer__item">Paris</li>
              <li className="footer__item">New York</li>
             </ul>
            </div>
            {/* <hr/> */}
          </footer>
        </Fragment>
    )
}

export default Footer;