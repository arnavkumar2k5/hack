import React, { useState, useEffect } from 'react'

function Navbar() {
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Navigation items configuration
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' }
  ]

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl bg-black/20 border-b border-cyan-400/20' 
        : 'backdrop-blur-md bg-black/10'
    }`}>
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center h-20">
            {/* Logo with futuristic styling */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl border border-cyan-400/30 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  {/* Futuristic logo icon */}
                  <div className="relative">
                    <svg className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
                  </div>
                </div>
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  HackFest
                </div>
                <div className="text-xs text-cyan-300/70 font-medium tracking-wider">
                  2025
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="group relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                  
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 uppercase tracking-wide overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 group-hover:animate-pulse"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  Register Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-12 h-12 bg-gradient-to-r from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-xl flex items-center justify-center hover:border-cyan-400/60 transition-all duration-300"
              >
                <div className="relative">
                  <svg className={`w-6 h-6 text-cyan-400 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"></div>
            
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="group relative block p-4 bg-gradient-to-r from-gray-800/20 to-gray-900/30 backdrop-blur-xl border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{item.name}</span>
                    <svg className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* Mobile Register Button */}
              <button className="w-full mt-6 group relative px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 uppercase tracking-wide overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic bottom border with gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-30'
      }`}></div>
    </nav>
  )
}

export default Navbar