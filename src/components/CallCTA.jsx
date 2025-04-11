"use client"
import React from 'react'

function CallCTA() {
  return (
    <div>
      {/* WhatsApp Button */}
      <div className="relative">
        <a
          href="https://wa.me/4407427170325?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-12 right-8 lg:right-10  transition-all duration-300 z-[99]  shadow-primary  animate-[buzzer_0.8s_ease-in-out_infinite]"
          aria-label="WhatsApp"
        >
          <img src="/wapp.png" className="w-16 h-16 " alt="WhatsApp" />
        </a>
      </div>

      {/* Label Text */}
      <div className="font-bold fixed bottom-28 lg:bottom-16 right-2 lg:right-24 transform -translate-x-1/2 bg-maintext text-white lg:text-md text-sm px-3 py-1.5 shadow-sm rounded-full animate-bounce z-[100]">
        Chat on WhatsApp
      </div>
    </div>
  )
}

export default CallCTA
