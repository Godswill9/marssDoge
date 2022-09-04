import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import './styles2.css'

export default function AboutPepe() {
  return (
    // <div>
    <div>
      {/* <div className='headerSec'> */}
      <Header/>
      {/* </div>  */}
        <div className='cont1'>
            {/* <div className='more'> */}
            <h1 className='aboutHeader'>About Pepe Samurai</h1>
        <div className='content'>
        Pepe Samurai is a community-driven reflection token. 
        The Pepe Samurai contract consists of four key features as static rewards, auto burn, development fee acquisition, and liquidity acquisition.<br></br><br></br>

        Each Pepe Samurai transaction will be taxed, 
       of which some percentage will be redistributed to all existing holders, then burned by transferring to the dead wallet. 
       Another % will be transferred to the development wallet for marketting and project development.
        </div>
            {/* </div> */}
        </div>
        {/* <div className='footer'> */}
        <div className='footer'>
                <div className='one'>
                <div className='indiv'>
                <h2>Our Social Profiles</h2>
                <p>Get in touch with us for the latest news, offers and updates.</p>
                <div className='links'>
                    <i style={{"fontSize":"20px",}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-telegram" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                </div>
                <div className='indiv'>
                <h2 className='about'>About</h2>
                <div><a href="/about">Pepe Samurai Token</a></div>
                </div>

                <div className='indiv'>
                <h2 className='resources'>resources</h2>
                <div>Documents</div>
                </div>

                <div className='indiv'>
                <h2 className='support'>Support</h2>
                <div>Contact Us</div>
                <div>Cookie Policy (US)</div>
                <div>Terms & Conditions</div>
                </div>
                </div>
               
                <div className='copyRight'>
                Copyright © 2022 Pepe Samurai
                </div>
            </div>  
    </div>
  )
}
