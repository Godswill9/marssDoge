import React, { useEffect, useRef, useState } from 'react'
import './header.css'

export default function Header() {
  const [width, setWidth]=useState("0")
  const [visibility, setvisibility]=useState("hidden")
  const [display2, setDisplay2]=useState("none")
  const [display3, setDisplay3]=useState("none")
const handleBar=()=>{
  if(width==="90%" || visibility==="visible"){
    setvisibility("hidden")
    setWidth("0")
  }
  else if(width==="0" || visibility==="hidden"){
    setWidth("90%")
    setvisibility("visible")
  }
}
const handleDropDown2=()=>{
  if(display2==="none"){
   setDisplay2("block")
  }
  else if(display2==="block"){
   setDisplay2("none")
  }
}
  return (
    <div>
        <div className='headerCont'>
            <div className='logo'>
                <img src="images/logoSamurai.jpg" alt="webLogo"></img> 
                <span>Pepe Samurai</span>
            </div>
            <div className='compView '>
            <div className='links'>
                <div><span>Home</span></div>
                <div><span>Tokenomics</span></div>
                <div><span>Road Map</span></div>
                <div><span>FAQ</span></div>
                <div><span>Audits <i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
                <div><span>Whitepaper</span></div>
            </div>
            <button className='compButton'>Buy Now</button>
            </div>
            <div className='mobileView'>
              {visibility=="hidden"? <i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em"}} class="fa fa-bars" aria-hidden="true"></i>:<i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em"}} class="fa fa-times" aria-hidden="true"></i>}
            <div className='contentDiv' style={{"width":width, "visibility":visibility}}>
            <div><span>Home</span></div>
                <div><span>Tokenomics</span></div>
                <div><span>Road Map</span></div>
                <div><span>FAQ</span></div>
                <div onClick={handleDropDown2}><span>Audits <i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-down" aria-hidden="true"></i></span>
                  <div className='dropDown' style={{"display":display2}}>
                  <div><span>Road Map2</span></div>
                    <div><span>FAQ2</span></div>
                    {/* <div><span></span></div> */}
                  </div>
                    </div>
                <div><span>Whitepaper</span></div>
             <div><button className='mobileBuy'>Buy now</button></div>
            </div>
            </div>
        </div>
    </div>
  )
}
