import React, { useState, useEffect, useRef, useCallback } from 'react'

function HeroSection() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  // Use ref to avoid unnecessary re-renders
  const intervalRef = useRef(null)

  // Countdown timer logic - optimized with useCallback
  useEffect(() => {
    const targetDate = new Date('2025-11-14T00:00:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }

    updateCountdown()
    intervalRef.current = setInterval(updateCountdown, 1000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Helper function to format time with leading zeros
  const formatTime = useCallback((time) => time.toString().padStart(2, '0'), [])

  return (
    <div id='hero' className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden'>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-gray-900/30 to-black/50">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-10 hero-grid-pattern"></div>
        
        {/* Glowing Orbs with Enhanced Animations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl hero-floating-orb animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl hero-floating-orb animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full blur-2xl hero-floating-orb delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/60 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-32 w-6 h-6 bg-cyan-400/50 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/3 left-16 w-8 h-2 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-3 h-8 bg-gradient-to-b from-blue-400/50 to-cyan-400/50 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-400/40 transform rotate-12 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-6 relative z-10 mt-36 md:mt-16'>
        {/* Main Title with Enhanced Effects */}
        <div className='relative mb-8 animate-fadeInUp'>
          {/* Glow Effect Behind Title */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-600/30 scale-110"></div>
          
          <div className='text-4xl md:text-6xl lg:text-7xl font-black mb-4 relative'>
            <div className='mb-2 text-white hero-title-glow leading-none tracking-tight'>
              QUANTUM FORGE
            </div>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 animate-gradient-flow leading-none tracking-tight'>
              HACKATHON 2025
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        
        {/* Enhanced Subtitle */}
        <div className='relative mb-12 animate-fadeInUp delay-300'>
          <div className='text-sm md:text-lg lg:text-xl tracking-[0.2em] font-light text-cyan-200 px-6 py-3 rounded-full border border-cyan-400/20 bg-black/30 backdrop-blur-lg'>
            RESHAPE REALITY • CODE THE IMPOSSIBLE
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"></div>
        </div>
        
        {/* Event Details Strip - Desktop Layout */}
        <div className='relative mb-12 animate-fadeInUp delay-500'>
          {/* Desktop Layout - Keep existing */}
          <div className='hidden md:block'>
            <div className='bg-gradient-to-r from-cyan-900/80 via-blue-900/80 to-cyan-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 mx-auto max-w-4xl'>
              {/* Subtle grid overlay */}
              <div 
                className="absolute inset-0 opacity-10 rounded-2xl"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              ></div>
              
              <div className='relative z-10 flex flex-row items-center justify-between text-left gap-6'>
                {/* Date Section */}
                <div className='flex-1'>
                  <div className='text-xl font-bold text-white mb-1'>NOVEMBER 14, 2025</div>
                  <div className='text-sm text-gray-300 uppercase tracking-wide'>MSIT, NEW DELHI</div>
                </div>
                
                {/* Vertical Divider */}
                <div className='w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent'></div>
                
                {/* Countdown Timer Section */}
                <div className='flex-1' id='timer'>
                  <div className='text-5xl font-mono font-black tracking-wider text-white mb-2 hero-countdown-glow'>
                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </div>
                  <div className='text-sm text-cyan-200 font-semibold uppercase tracking-widest'>EVENT STARTS IN</div>
                </div>
                
                {/* Vertical Divider */}
                <div className='w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent'></div>
                
                {/* Prize Section */}
                <div className='flex-1'>
                  <div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 mb-1'>
                    $50,000
                  </div>
                  <div className='text-sm text-gray-300 uppercase tracking-wide'>IN PRIZES</div>
                </div>
              </div>
              
              {/* Decorative bottom border */}
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent'></div>
            </div>
          </div>

          {/* Mobile Layout - Futuristic Grid Design */}
          <div className='md:hidden space-y-6'>
            {/* Top Row: Date, Location, Prize - Grid Cards */}
            <div className='flex gap-2 px-4'>
              {/* Date Card */}
              <div className='flex-1 relative group'>
                <div className='bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-3 text-center transition-all duration-300 group-hover:border-cyan-400/60 relative overflow-hidden'>
                  {/* Grid pattern background */}
                  <div className='absolute inset-0 opacity-10 hero-grid-pattern'></div>
                  {/* Floating particle */}
                  <div className='absolute top-1 right-1 w-2 h-2 bg-cyan-400/60 rounded-full hero-floating-orb'></div>
                  
                  <div className='relative z-10'>
                    <div className='text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1 font-mono'>DATE</div>
                    <div className='text-sm font-black text-white leading-tight font-mono'>NOV 14</div>
                    <div className='text-[10px] text-cyan-300/70 font-mono'>2025</div>
                  </div>
                </div>
              </div>
              
              {/* Location Card */}
              <div className='flex-1 relative group'>
                <div className='bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-blue-900/20 backdrop-blur-xl border border-blue-400/30 rounded-xl p-3 text-center transition-all duration-300 group-hover:border-blue-400/60 relative overflow-hidden h-19'>
                  {/* Grid pattern background */}
                  <div className='absolute inset-0 opacity-10 hero-grid-pattern'></div>
                  {/* Floating particle */}
                  <div className='absolute top-1 right-1 w-2 h-2 bg-blue-400/60 rounded-full hero-floating-orb delay-300'></div>
                  
                  <div className='relative z-10'>
                    <div className='text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1 font-mono'>VENUE</div>
                    <div className='text-sm font-black text-white leading-tight font-mono'>MSIT<br/>DELHI</div>
                  </div>
                </div>
              </div>
              
              {/* Prize Card */}
              <div className='flex-1 relative group'>
                <div className='bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-3 text-center transition-all duration-300 group-hover:border-cyan-400/60 relative overflow-hidden'>
                  {/* Grid pattern background */}
                  <div className='absolute inset-0 opacity-10 hero-grid-pattern'></div>
                  {/* Floating particle */}
                  <div className='absolute top-1 right-1 w-2 h-2 bg-cyan-400/60 rounded-full hero-floating-orb delay-500'></div>
                  
                  <div className='relative z-10'>
                    <div className='text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1 font-mono'>PRIZES</div>
                    <div className='text-lg font-black hero-title-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono'>
                      ₹10K
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Timer - Futuristic Design */}
            <div className='mx-4'>
              <div className='relative group'>
                <div className='bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-xl border-2 border-cyan-400/40 rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60'>
                  {/* Grid background */}
                  <div className='absolute inset-0 opacity-5 hero-grid-pattern'></div>
                  
                  {/* Floating particles */}
                  <div className='absolute top-4 left-4 w-3 h-3 bg-cyan-400/40 rounded-full hero-floating-orb'></div>
                  <div className='absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full hero-floating-orb delay-300'></div>
                  <div className='absolute bottom-4 left-6 w-2 h-2 bg-cyan-400/30 rounded-full hero-floating-orb delay-500'></div>
                  <div className='absolute bottom-4 right-6 w-3 h-3 bg-blue-400/30 rounded-full hero-floating-orb delay-700'></div>
                  
                  {/* Timer Content */}
                  <div className='relative z-10'>
                    <div className='text-xs text-cyan-400 font-bold uppercase tracking-widest mb-3 font-mono'>EVENT STARTS IN</div>
                    <div className='text-3xl font-black tracking-wider text-white mb-3 hero-countdown-glow font-mono' id='timer'>
                      {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </div>
                    <div className='flex justify-center gap-4 text-[10px] font-mono font-bold uppercase tracking-wider'>
                      <span className='text-cyan-300/80'>DAYS</span>
                      <span className='text-blue-300/80'>HOURS</span>
                      <span className='text-cyan-300/80'>MIN</span>
                      <span className='text-blue-300/80'>SEC</span>
                    </div>
                  </div>

                  {/* Futuristic corner brackets */}
                  <div className='absolute top-0 left-0 w-6 h-6'>
                    <div className='absolute top-2 left-0 w-4 h-[1px] bg-gradient-to-r from-cyan-400/60 to-transparent'></div>
                    <div className='absolute top-0 left-2 w-[1px] h-4 bg-gradient-to-b from-cyan-400/60 to-transparent'></div>
                  </div>
                  <div className='absolute top-0 right-0 w-6 h-6'>
                    <div className='absolute top-2 right-0 w-4 h-[1px] bg-gradient-to-l from-blue-400/60 to-transparent'></div>
                    <div className='absolute top-0 right-2 w-[1px] h-4 bg-gradient-to-b from-blue-400/60 to-transparent'></div>
                  </div>
                  <div className='absolute bottom-0 left-0 w-6 h-6'>
                    <div className='absolute bottom-2 left-0 w-4 h-[1px] bg-gradient-to-r from-cyan-400/60 to-transparent'></div>
                    <div className='absolute bottom-0 left-2 w-[1px] h-4 bg-gradient-to-t from-cyan-400/60 to-transparent'></div>
                  </div>
                  <div className='absolute bottom-0 right-0 w-6 h-6'>
                    <div className='absolute bottom-2 right-0 w-4 h-[1px] bg-gradient-to-l from-blue-400/60 to-transparent'></div>
                    <div className='absolute bottom-0 right-2 w-[1px] h-4 bg-gradient-to-t from-blue-400/60 to-transparent'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-600/20 rounded-2xl opacity-50 blur-xl -z-10"></div>
        </div>
        
        {/* Premium Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-700'>
          <button className='hero-button-premium group px-8 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white font-bold text-lg rounded-xl hover:from-cyan-700 hover:via-blue-700 hover:to-cyan-800 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 uppercase tracking-wide'>
            <span className='relative flex items-center justify-center gap-2 z-10'>
              REGISTER NOW
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </span>
          </button>
          
          <button className='hero-button-premium group px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold text-lg rounded-xl border-2 border-cyan-400/40 hover:border-blue-400 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 uppercase tracking-wide'>
            <span className='relative flex items-center justify-center gap-2 z-10'>
              LEARN MORE
              <svg className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default HeroSection