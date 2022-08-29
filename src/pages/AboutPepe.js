import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import './styles2.css'

export default function AboutPepe() {
  return (
    <div className='aboutPepe'>
        <Header/>
        <div className='cont1'>
            <div className='more'>
            <h1 className='aboutHeader'>About Pepe Samurai</h1>
        <div className='content'>
        Pepe Samurai is a community-driven reflection token. 
        The Pepe Samurai contract consists of four key features as static rewards, auto burn, development fee acquisition, and liquidity acquisition.<br></br><br></br>

        Each Pepe Samurai transaction will be taxed at 10% of the transaction amount. 
        Then a 7% fee will be redistributed to all existing holders through a rebasing mechanism, 1% will be burned by transferring to the dead wallet, another 1% will be transferred to the development wallet, and the remaining 1% will be accumulated internally until sufficient capital is gathered.
        </div>
            </div>
        <Footer/>
        </div>
    </div>
  )
}
