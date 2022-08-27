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
const close=()=>{
  setvisibility("hidden")
    setWidth("0")
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
                <div><a href="#container1"><span>Home</span></a></div>
                <div><a href="#Section3"><span>Tokenomics</span></a></div>
                <div><a href="#Section4"><span>Road Map</span></a></div>
                <div><a href="#FAQs"><span>FAQ</span></a></div>
                <div><span>Audits <i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
                <div><a href=""><span>Whitepaper</span></a></div>
            </div>
            </div>
            <div className='mobileView'>
              {visibility=="hidden"? <i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em"}} class="fa fa-bars" aria-hidden="true"></i>:<i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em"}} class="fa fa-times" aria-hidden="true"></i>}
            <div className='contentDiv' style={{"width":width, "visibility":visibility}}>
            <div onClick={close}><a href="#container1"><span>Home</span></a></div>
                <div onClick={close}><a href="#Section3"><span>Tokenomics</span></a></div>
                <div onClick={close}><a href="#Section4"><span>Road Map</span></a></div>
                <div onClick={close}><a href="#FAQs"><span>FAQ</span></a></div>
                <div onClick={handleDropDown2}><span>Audits <i style={{"fontSize":"15px","fontWeight":"10px" }} class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
                <div className='dropDown' style={{"display":display2}}>
                    <div onClick={close}><a href=""><span>Extra1</span></a></div>
                    <div onClick={close}><a href=""><span>Extra2</span></a></div>
                  </div>
                  <div><a href=""><span>Whitepaper</span></a></div>
                  <div onClick={close}><button className='mobileBuy'>Buy now</button></div>
                  </div>
                    </div>
        </div>
    </div>
  )
}
