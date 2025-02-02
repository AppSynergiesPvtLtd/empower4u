"use client"
import React, { useEffect, useState } from 'react'

function CallCTA() {
    const [isMobileWidth, setIsMobileWidth] = useState(false);
  
    useEffect(() => {
    
      const handleResize = () => {
        setIsMobileWidth(window.innerWidth < 500);
      };
  
     
      handleResize();
  
     
      window.addEventListener('resize', handleResize);
  
     
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleClick = (e) => {
    
      if (isMobileWidth) {
      
        window.location.href = "tel:07427170325";
      } else {
        
        window.location.href = "mailto:info@empower4u.org"; 
      }
  
     
    };
  return (
    <div> <div className="relative">
			  <a
      href="#"
      onClick={()=>handleClick()}
      className="fixed bottom-12 right-8 lg:right-10 rounded-full shadow-lg transition-all duration-300 z-[99] bg-white shadow-primary p-2 animate-[buzzer_0.5s_ease-in-out_infinite]"
      aria-label="Contact"
      style={{
        animation: 'buzzer 0.8s ease-in-out infinite',
      }}
    >
      <img src="/call2.png" className="w-12 h-12" alt="Contact" />
    </a>
			</div>
			<div className="font-bold fixed bottom-28 lg:bottom-16 right-2 lg:right-24 transform -translate-x-1/2 bg-maintext text-white lg:text-md text-sm px-3 py-1.5 shadow-sm rounded-full animate-bounce z-[100]">
				Speak With Us{" "}
			</div></div>
  )
}

export default CallCTA