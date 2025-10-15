import React, { useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Quantum Forge Hackathon 2025?",
      answer: "Quantum Forge is a 48-hour intensive coding competition where teams of developers, designers, and innovators come together to build groundbreaking solutions using cutting-edge technologies. It's designed to push the boundaries of what's possible in tech."
    },
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to developers, designers, students, entrepreneurs, and tech enthusiasts of all skill levels. Whether you're a beginner or an expert, there's a place for you. Teams can have 2-4 members, and we encourage diverse skill sets within teams."
    },
    {
      question: "How much does it cost to participate?",
      answer: "Participation is completely FREE! We believe innovation shouldn't have barriers. All meals, snacks, swag, and access to mentors and workshops are included. Just bring your laptop, creativity, and enthusiasm!"
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you want to work with, a valid ID, and comfortable clothes. We'll provide power strips, internet, food, drinks, and a collaborative environment. Optional: sleeping bag if you plan to stay overnight."
    },
    {
      question: "Do I need a team to participate?",
      answer: "You can participate solo or with a team of up to 4 people. If you don't have a team, we'll have team formation sessions at the beginning of the event where you can meet other participants and form teams based on skills and interests."
    },
    {
      question: "What kind of projects can we build?",
      answer: "Any software or hardware project that can be developed within 48 hours! Popular categories include AI/ML, blockchain, IoT, mobile apps, web applications, games, AR/VR, and social impact solutions. Creativity and innovation are highly valued."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects are evaluated based on: Innovation & Creativity (30%), Technical Implementation (25%), Impact & Usefulness (25%), Presentation & Demo (20%). Our panel includes industry experts, VCs, and technical leaders."
    },
    {
      question: "What prizes can we win?",
      answer: "We have $50,000 in total prizes including cash awards, startup funding opportunities, job offers, mentorship programs, and amazing tech gadgets. First place wins $15,000, with additional category-specific prizes and sponsor awards."
    },
    {
      question: "Will there be mentors and workshops?",
      answer: "Yes! We have 20+ industry mentors from top tech companies who will be available throughout the event. We'll also have technical workshops, design sessions, and pitch coaching to help you succeed."
    },
    {
      question: "Is food and accommodation provided?",
      answer: "We provide all meals, snacks, and beverages throughout the 48 hours. The venue is open 24/7 with designated rest areas. While we don't provide hotels, many participants choose to stay at the venue overnight."
    },
    {
      question: "How do I register for the hackathon?",
      answer: "Click the 'Register Now' button on our homepage to fill out the application form. Registration closes on March 10th, 2025, or when we reach capacity. We'll notify accepted participants by March 15th."
    },
    {
      question: "What if I'm new to hackathons?",
      answer: "Perfect! Hackathons are great learning experiences. We have beginner-friendly workshops, mentors specifically assigned to help newcomers, and a supportive community. Many successful projects come from first-time participants!"
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Moving Grid Pattern */}
        {/* <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridFloat 25s linear infinite'
          }}
        ></div> */}
        
        {/* Floating Orbs */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
        
        {/* Geometric Shapes */}
        {/* <div className="absolute top-20 left-10 w-6 h-6 bg-cyan-400/40 transform rotate-45 animate-spin delay-300" style={{animation: 'spin 8s linear infinite'}}></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-2 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 animate-pulse delay-1000"></div> */}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Glow Effect Behind Title */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-600/30 scale-110"></div>
            
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-4 relative leading-tight">
              <span className="text-white drop-shadow-2xl tracking-tight" style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'}}>
                FREQUENTLY
              </span>
              <br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-flow 4s ease infinite'
                }}
              >
                ASKED QUESTIONS
              </span>
            </h2>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-cyan-400/60 transform rotate-12"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-r-4 border-t-4 border-blue-400/60 transform -rotate-12"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-4 border-b-4 border-blue-500/60 transform -rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-purple-500/60 transform rotate-12"></div>
          </div>
          
          {/* Subtitle */}
          <div className="relative mt-8">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-blue-400/30 px-8 py-4 rounded-2xl inline-block">
              <p className="text-lg md:text-xl text-blue-200 leading-relaxed tracking-wide">
                Everything you need to know about Quantum Forge Hackathon
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-blue-400/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Grid overlay */}
                <div 
                  className="absolute inset-0 opacity-5 rounded-2xl"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                ></div>
                
                {/* Question Header */}
                <button
                  className="w-full text-left p-6 md:p-8 focus:outline-none relative z-10"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center transition-all duration-300 ${
                        openIndex === index ? 'rotate-45 bg-gradient-to-r from-cyan-500/40 to-blue-500/40' : 'group-hover:border-cyan-400/60'
                      }`}
                    >
                      <svg 
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-45' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"></div>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* External glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Still have <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">questions</span>?
              </h3>
              <p className="text-gray-300 mb-6">
                Reach out to our team and we'll get back to you within 24 hours
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 uppercase tracking-wide overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 z-10">
                    Contact Us
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                
                <button className="group relative px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl border-2 border-cyan-400/40 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 uppercase tracking-wide overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 z-10">
                    Join Discord
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h8z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-600/20 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes gridFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
      `}</style>
    </section>
  )
}

export default Faq