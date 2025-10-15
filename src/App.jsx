import { useState, lazy, Suspense, useEffect } from 'react'
import {BotMessageSquare} from "lucide-react"
import './App.css'
import { applyPerformanceMode } from './lib/performance'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'

// Lazy load less critical components for better mobile performance
const Sponsors = lazy(() => import('./components/Sponsors'))
const Team = lazy(() => import('./components/Team'))
const Faq = lazy(() => import('./components/Faq'))
const Footer = lazy(() => import('./components/Footer'))
const Chatbot = lazy(() => import('./components/ChatBot'))

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // Apply performance optimizations on mount
  useEffect(() => {
    applyPerformanceMode()
  }, [])

  return (
    <div id='hero' className="App relative">
      <Navbar />
      <HeroSection />
      <About />
      
      {/* Lazy load non-critical sections */}
      <Suspense fallback={<div className="py-20 text-center text-white">Loading...</div>}>
        <Sponsors />
        <Team />
        <Faq />
        <Footer />
      </Suspense>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5  group px-8 py-3 
             bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 
             text-white font-bold text-lg rounded-xl 
             hover:from-cyan-700 hover:via-blue-700 hover:to-cyan-800 
             transform hover:scale-[1.03] hover:shadow-xl 
             hover:shadow-cyan-500/40 uppercase tracking-wide 
             transition-all duration-300 z-50 flex items-center gap-2"
      >
        <span className="relative flex items-center justify-center gap-2 z-10">
          {isOpen ? 'CLOSE CHAT' : <p className='flex gap-2 items-center'>ENQUIRE VIA AI <span><BotMessageSquare /></span></p>}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-x-1'
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </button>

      {/* Only render chatbot when opened */}
      {isOpen && (
        <Suspense fallback={<div className="fixed bottom-6 right-6 w-96 h-96 bg-gray-900 rounded-2xl"></div>}>
          <div className={`${isOpen ? "w-[70vw] h-[70vh] " : "h-0 w-0"} transition-all duration-700`}>
            <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </Suspense>
      )}
    </div>
  )
}

export default App
