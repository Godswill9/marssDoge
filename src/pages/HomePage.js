import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import './styles.css'
import gsap, { Elastic } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Charts from './Chart'
import Footer from './Footer'

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

    //Background animations
    gsap.fromTo("#MultiGsapAnimeDot",{ y:-100, x:-100},{opacity:1,y:500, x:900,ease:"slow", duration:10,repeat: -1,yoyo: true})
    gsap.fromTo("#MultiGsapAnimeDot2",{  x:-100},{opacity:1,x:700,y:700,ease:"slow", duration:9,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot3",{opacity:1,y:1200,ease:"slow",delay:1, duration:7,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot4",{opacity:1,y:1200,ease:"slow",delay:1, duration:6,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot5",{opacity:1,y:1200,x:200,ease:"slow",delay:.5, duration:8,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot6",{opacity:1,y:300,x:300,ease:"slow",delay:1.5, duration:8.4,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot7",{opacity:1,y:1200,x:-500,ease:"slow",delay:3, duration:5,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot8",{opacity:1,y:900,x:-800,ease:"slow",delay:2.3, duration:8,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot9",{opacity:1,y:700,x:100,ease:"slow",delay:1, duration:14,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot10",{opacity:1,y:1200,x:-200,ease:"slow",delay:3, duration:7.5,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot11",{opacity:1,y:950,x:-200,ease:"slow",delay:2, duration:5.5,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot12",{opacity:1,y:1050,x:-200,ease:"slow",delay:2.5, duration:9,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot13",{opacity:1,y:1200,x:-200,ease:"slow",delay:1.5, duration:6.8,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot14",{opacity:1,y:1200,x:-200,ease:"slow",delay:1, duration:4.9,repeat: -1,yoyo: true})
    gsap.to("#MultiGsapAnimeDot15",{opacity:1,y:1200,x:-200,ease:"slow",delay:1.5, duration:10,repeat: -1,yoyo: true})

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
        <div className='containerOne' id="container1">
            <img className='background' src="images/logoSamurai-removebg-preview.png" alt='' id='MultiGsap3Img'></img>
            {/* <img className='background1' src="images/circle3-removebg-preview.png" alt='' id='MultiGsapAnimeA'></img> */}
            <img className='smallCircle background1b' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot'></img>
            <img className='smallCircle background1bb' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeDot2'></img>
            <img className='smallCircle background1d' src="images/circle3-removebg-preview.png" alt='' id='MultiGsapAnimeDot3'></img>
            <img className='smallCircle background1e' src="images/circle3-removebg-preview.png" alt='' id='MultiGsapAnimeDot4'></img>
            <img className='smallCircle background1f' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot5'></img>
            <img className='smallCircle background1g' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeDot6'></img>
            <img className='smallCircle background1h' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeDot7'></img>
            <img className='smallCircle background1I' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot8'></img>
            <img className='smallCircle background1j' src="images/circle3-removebg-preview.png" alt='' id='MultiGsapAnimeDot9'></img>
            <img className='smallCircle background1k' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot10'></img>
            <img className='smallCircle background1L' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot11'></img>
            <img className='smallCircle background1M' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeDot12'></img>
            <img className='smallCircle background1N' src="images/circle3-removebg-preview.png" alt='' id='MultiGsapAnimeDot13'></img>
            <img className='smallCircle background1O' src="images/ligthGreen-removebg-preview.png" alt='' id='MultiGsapAnimeDot14'></img>
            <img className='smallCircle background1P' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeDot15'></img>

            {/* <img className='background1c' src="images/circleLightPink-removebg-preview (1).png" alt='' id='MultiGsapAnimeA2'></img> */}
            <div className='background2'></div>
            <div className='noteContent'></div>
                <div className='trapezoid'></div>
                    <div className='cont'>
                    <h3 id='MultiGsap'>Multiplanetary Token</h3>
                    <h1 id='MultiGsap2'>Pepe<br></br> Samurai</h1>
                    <p id='MultiGsap3a' className='para1'>Pepe Samurai is a deflationary, reflection token created by the community. It allows users to earn a passive income simply by 
                        holding Pepe Samurai.
                     </p>
                    <p className='para2' id='MultiGsap3'>
                        The Pepe Samurai token will be utilized as a payment and reward system 
                        on its' future gambling platform and Pepe Samurai NFT, marketplace. Please refer to our RoadMap 
                        for more details.
                    </p>

                    <h4>Contact Address</h4>
                    <span className='para3'>Token name:</span><span className='para3Det'>Pepe Samurai</span>
                    <p className='para4'>Total supply</p>
                    <p className='para5'>Tax</p>

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
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={{"fontSize":"40px", "paddingRight":"35px"}} class="fa fa-telegram" aria-hidden="true"></i>
                    </div>
            </div>
            </div>
            <div className='Section2' id='Section2'>
                <h2 id='MultiGsap4'>Announcements</h2>
                <div className='details' id='MultiGsap5'>
                    <p>✔(Visit our Telegram group for more details ⛷)</p>
                </div>
            </div>
            <div className="newSecWrap">
            <div className='section2b' id='section2b'>
                <div className='contents'>
                    <img src="images/5f415abfd3d63e0004b93e24-removebg-preview.png" alt=''></img>
                    <h3>Reflection</h3>
                    <p>Buy And Hold to earn a passive income in to your wallet.</p>
                </div>
                <div className='contents'>
                    <img src="images/phoneMarketting-removebg-preview.png" alt=''></img>
                    <h3>Marketting % Development</h3>
                    <p>Fund is needed for marketting and developing Pepe Samurai to the next level.</p>
                </div>
                <div className='contents'>
                    <img src="images/LiquidityImage.jfif" alt=''></img>
                    <h3>Auto Liquidity</h3>
                    <p>This will make sure that we have a stable liquidity, so that the project will be able to maintain the price.</p>
                </div>
            </div>
            </div>
            <div className='section3' id='Section3'>
                <h1 id='MultiGsap6'>Tokenomics and Special Features</h1>
                <div className='details' id='MultiGsap7'>
                    <Charts chartsData={chartData} type='line'/>
                </div>
            </div>
            <div className='section4' id='Section4'>
                <img src='' alt=''></img>
                <img src='' alt=''></img>
                <h3 id='MultiGsap8'>Our RoadMap</h3>
                <div className='content' id='MultiGsap9'>
                <div className='indiv'>
                     <h3>Stage I 🐱‍👤</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Creation of the Social Media Accounts</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Deployment of smart contracts</span>
                        <span><i style={{"padding":"6px","color":"green"}} class="fa fa-check-circle" aria-hidden="true"></i>Launch of the website</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Presale</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Initiate partnership</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>TG Call Groups</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Influencer Marketing</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Staking Pools with HUGE APR</span>
                     </div>
                </div>
                <div className='indiv'>
                     <h3>Stage II 🔥🔥</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Launch of Pepe Samurai Token</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Listing on coin voting website</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Real-time price charts</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Launch of lottery Game</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>CEX Listing</span>
                     </div>
                </div>
                <div className='indiv'>
                     <h3>Stage III 🐱‍🏍🐱‍🏍</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Listing on Coin Gecko</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Listing on coin market cap</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Big Marketting ADS</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Release of NFT</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Listing on major exchange</span>
                     </div>
                </div>
                <div className='indiv'>
                     <h3>Stage IV 💰</h3>
                     <div className='list'>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Launch Pepe Swap</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Website redesign</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>NFT staking</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>Launch of mini-game</span>
                        <span><i style={{"padding":"6px"}} class="fa fa-clock-o" aria-hidden="true"></i>RoadMap Expansion</span>
                     </div>
                </div>
            </div>
            </div>
           <Footer/>
        </div>
  )
}

const dataFAQs=[
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."
         
    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    },
    {
        Question:"what is Pepe Samurai?",
         Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien viverra, luctus metus quis, vestibulum purus. Duis in purus erat. Vivamus vel elit et leo placerat pretium. Maecenas pellentesque vitae lectus non vulputate. Cras id odio eleifend, condimentum est vel, lobortis libero. Ut a pretium arcu. Vestibulum pharetra nisi nec enim feugiat, nec mattis velit mollis. Cras metus odio, vehicula a libero nec, feugiat bibendum tortor."

    }
]

const chartData = {
    labels: [],
    datasets: [{
      label: 'My First Dataset',
      data: [ 30, 40, 20, 10],
      backgroundColor:  [
        'rgb(146, 43, 43)', 
        'rgb(110, 192, 89)',
        "rgba(240, 240, 130, 0.356)",
        "rgba(118, 118, 204, 0.466)"
      ],
      hoverOffset:3
    }]
}