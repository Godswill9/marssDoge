import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import './styles.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function HomePage() {
    gsap.registerPlugin(ScrollTrigger);
    const [answer, setAnswer]=useState(null)
    const toggle=(i)=>{
       if(answer == i){
        return setAnswer(null)
       }
       setAnswer(i)
    }
   useEffect(()=>{
    gsap.to("#MultiGsap",{opacity:1,duration:2,delay:.31})
    gsap.fromTo("#MultiGsap2",{ opacity:0, y:100,},{opacity:1,y:0,duration:2.4,})
    gsap.fromTo("#MultiGsap3Img",{ opacity:0, x:160,},{opacity:1,x:0,duration:2.4,delay:.5})
    gsap.fromTo("#MultiGsap3a",{ opacity:0, y:100,},{opacity:1,y:0,duration:2.4,delay:.5})
    gsap.fromTo("#MultiGsap3",{ opacity:0, y:100,},{opacity:1,y:0,duration:2.4,delay:1})

       //next ones(scroll trigger)
    gsap.fromTo("#MultiGsap4",{ opacity:0, y:100,},{opacity:1,y:0,duration:1, scrollTrigger:{ trigger:"#MultiGsap4"}})
    gsap.fromTo("#MultiGsap5",{ opacity:0},{opacity:1,duration:2, delay:1, scrollTrigger:{ trigger:"#MultiGsap5"}})
    gsap.fromTo("#MultiGsap6",{ opacity:0, y:100,},{opacity:1,y:0,duration:1.2, scrollTrigger:{ trigger:"#MultiGsap6"}})
    gsap.fromTo("#MultiGsap7",{ opacity:0, y:100,},{opacity:1,y:0,duration:1.4, delay:1, scrollTrigger:{ trigger:"#MultiGsap7"}})
    gsap.fromTo("#MultiGsap8",{ opacity:0 },{opacity:1,y:0,duration:1.3, scrollTrigger:{ trigger:"#MultiGsap8"}})
    gsap.fromTo("#MultiGsap9",{ opacity:0, y:100,},{opacity:1,y:0,duration:1.4, delay:.5, scrollTrigger:{ trigger:"#MultiGsap9"}})
    gsap.fromTo("#MultiGsap10",{ opacity:0, x:-100,},{opacity:1,x:0,duration:1.4,delay:.7, scrollTrigger:{ trigger:"#MultiGsap10"}})
    gsap.fromTo("#MultiGsap11",{ opacity:0, y:100,},{opacity:1,y:0,duration:1.4,delay:1, scrollTrigger:{ trigger:"#MultiGsap11"}})
    gsap.fromTo("#MultiGsap12",{ opacity:0, y:100,},{opacity:1,y:0,duration:1.2, ease:"bounce", scrollTrigger:{ trigger:"#MultiGsap12"}})
   },[])

  return (
    <div>
        <Header/>
        <div className='containerOne'>
            {/* <img className='background' src="images/dogecoin.webp" alt='' id='MultiGsap3Img'></img> */}
            <img className='background' id='MultiGsap3Img'></img>
            <div className='background2'></div>
            <div className='noteContent'></div>
                <div className='trapezoid'></div>
                    <div className='cont'>
                    <h3 id='MultiGsap'>Multiplanetary Token</h3>
                    <h1 id='MultiGsap2'>Mars Doge</h1>
                    <p id='MultiGsap3a'>MarsDoge is a deflationary, reflection token deployed on the Binance 
                        Smart Chain (BSC). It allows usere to earn a passive income simply by 
                        holding MarsDoge.
                     </p>
                    <p className='para2' id='MultiGsap3'>
                        The Mars Doge token will be utilized as a payment and reward system 
                        on its' future gambling platform and Mars Doge NFT.Please refer to our RoadMap and Whitepaper 
                        for more details.
                    </p>

                    <h4>Contact Address:</h4>
                    <p className='address'>0xd76f84a1D7B9628280f9e9C6910<br></br>866CECDc7f3A5<i class="fa fa-chevron-copy" aria-hidden="true"></i></p>

                    <span className='slippage'>Slippage 10-12%</span>
                    <div className='buttons'>
                        <button>Buy Now</button>
                        <button>Chart</button>
                        <button>Chat</button>
                    </div>
                    <h3 className='follow'>Follow us on...</h3>
                    <div className='iconss'>
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-facebook" aria-hidden="true"></i>
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-reddit" aria-hidden="true"></i>
                    {/* <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-discord" aria-hidden="true"></i> */}
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-telegram" aria-hidden="true"></i>
                    </div>
            </div>
            </div>
            <div className='Section2'>
                <h2 id='MultiGsap4'>Announcements</h2>
                <div className='details' id='MultiGsap5'>
                    <p>✔ The full <a href='#'>CERTIK</a> audit of MarsDoge has been completed with Skynet activation.</p>
                    <p>✔ MARSDOGE is now available on the <a href='#'>PancakeSwap</a> and <a href='#'>CoinTiger</a> exchanges.</p>
                </div>
            </div>
            <div className='section3'>
                <h1 id='MultiGsap6'>Tokenomics and Special Features</h1>
                <div className='details' id='MultiGsap7'>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                    <div className='indiv'>
                        <img src="images/SeekPng.com_dot-png_274118.png"></img>
                        <h3>Re-distribution to holders (Reflection)</h3>
                        <p>7% of each transaction will be redistributed to all existing MarsDoge holders as a passive income, based on the number of tokens held by them.</p>
                    </div>
                </div>
            </div>
            <div className='section4'>
                <h3 id='MultiGsap8'>Our RoadMap</h3>
                <div className='content' id='MultiGsap9'>
                <div className='indiv'>
                     <h3>Stage I</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                     </div>
                </div>
                <div className='indiv'>
                     <h3>Stage II</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                     </div>
                </div>
                <div className='indiv'>
                     <h3>Stage III</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                     </div>
                </div>
            </div>
            </div>
            <div className='section5'>
                <h1 id='MultiGsap10'>As Seen On</h1>
                <div className='logos' id='MultiGsap11'>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                    <img src="images/SeekPng.com_dot-png_274118.png"></img>
                </div>
            </div>
            <div className='FAQs'>
                <h2 id='MultiGsap12'>Frequently asked questions(FAQs)</h2>
                <div className='accordion'>
                    {dataFAQs.map((item, i)=>(
                            <div className='panel' key={i}>
                        <span onClick={()=> toggle(i)}>{item.Question}  {answer== i? <i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-up" aria-hidden="true"></i>:<i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-down" aria-hidden="true"></i>}  </span>
                        {answer ==i ? <div className='content' style={{"display":"block"}}>{item.Answer}</div>:<div className='content'></div>}
                    </div>
                    ))}
            </div>
            <div className='footer'>
                <div className='one'>
                <div className='indiv'>
                <h2>Our Social Profiles</h2>
                <p>Get in touch with us for the latest news, offers and updates.</p>
                <div className='links'>
                <i style={{"fontSize":"20px",}} class="fa fa-facebook" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-reddit" aria-hidden="true"></i>
                    {/* <i style={{"fontSize":"20px",}} class="fa fa-discord" aria-hidden="true"></i> */}
                    <i style={{"fontSize":"20px",}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-telegram" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-facebook" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-reddit" aria-hidden="true"></i>
                    {/* <i style={{"fontSize":"20px",}} class="fa fa-discord" aria-hidden="true"></i> */}
                    <i style={{"fontSize":"20px",}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-telegram" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"20px",}} class="fa fa-telegram" aria-hidden="true"></i>
                </div>
                </div>
                <div className='indiv'>
                <h2 className='about'>About</h2>
                <div>Mars Doge Token</div>
                <div>Bug Bounty</div>
                <div>Development Team</div>
                </div>

                <div className='indiv'>
                <h2 className='resources'>resources</h2>
                <div>Documents</div>
                <div>Whitepaper</div>
                <div>Audits</div>
                </div>

                <div className='indiv'>
                <h2 className='support'>Support</h2>
                <div>Contact Us</div>
                <div>Cookie Policy (US)</div>
                <div>Terms & Conditions</div>
                </div>
                </div>
               
                <div className='copyRight'>
                Copyright © 2022 MarsDoge
                </div>
            </div>
        </div>
  </div>
  )
}

const dataFAQs=[
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"
         
    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    },
    {
        Question:"what is metaverse?",
         Answer:"rthgsdgiu hiusfdsu bifgbiwr dsish dfhu uhisfsghfug hiufgbksfdbb fbvkfvfvbjhxzbvjh fdjjfbv bfdhvfkv bfks dbsk fhvbfkb fbdvksdfb vjbkdsbv hkbsdfvbdsfb"

    }
]
