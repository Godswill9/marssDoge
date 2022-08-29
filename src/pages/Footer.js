import React from 'react'

export default function Footer() {
  return (
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
                <div>Whitepaper</div>
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
  )
}
