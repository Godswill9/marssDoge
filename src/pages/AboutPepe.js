import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import './styles2.css'

export default function AboutPepe() {
  return (
    <div className='all'>
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
        <Footer/>  
        {/* </div> */}
    </div>
  )
}
