import React from 'react'
import Newsletter from './Newsletter'
import "../assets/styles/footer.css"
import fb from "../assets/images/facebook .svg"
import insta from "../assets/images/instagram.svg"
import X from "../assets/images/x-logo.svg"
import pint from "../assets/images/pinterest.svg"
import logo from "../assets/images/logo.png"




function Footer() {
  return (
    <div className='footer'>
        <Newsletter/>
        <div className='footer-sections'>
            <div className='logo-copy'>
                <img src={logo} alt=''/>
                <p>Copyright (c) Phabna 2024 All rights reserved</p>
            </div>
            <div className='center-footer'>
                <div className='menu-footer'>
                    <h4>Menu</h4>
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Travel</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>

                </div>
                <div className='menu-footer'>
                    <h4>Information</h4>
                    <ul>
                        <li>Destinations</li>
                        <li>Support</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                    </ul>

                </div>
                <div className='menu-footer'>
                    <h4>Contact Info</h4>
                    <ul>
                        <li>+123 456 888</li>
                        <li>info@phabna.com</li>
                        <li>132, Nairobi Kenya</li>
                    </ul>

                </div>
            </div>
            <div className='socials-footer'>
                <h4>Follow us on </h4>
                <div className='socials-f'>
                    <img src={fb} alt=''/>
                    <img src={insta} alt=''/>
                    <img src={X} alt=''/>
                    <img src={pint} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer