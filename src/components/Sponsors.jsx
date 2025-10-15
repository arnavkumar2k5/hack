import React from 'react'

function Sponsors() {
  const sponsors = {
    platinum: [
      { name: "Q", icon: "Q" },
      { name: "F", icon: "F" },
      { name: "M", icon: "M" }
    ],
    gold: [
      { name: "ΣIO", icon: "ΣIO" },
      { name: "ΣIOK", icon: "ΣIOK" },
      { name: "Δ", icon: "Δ" },
      { name: "Byte", icon: "Byte" }
    ],
    silver: [
      { name: "Link", icon: "Link" },
      { name: "Icons", icon: "⚡" },
      { name: "Cloud", icon: "☁" },
      { name: "Data", icon: "Data" }
    ]
  }

  const SponsorCard = ({ sponsor, tier }) => (
    <div className="group relative">
      <div className="w-48 h-24 md:w-64 md:h-32 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5 rounded-2xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        {/* Sponsor content */}
        <div className="relative z-10 text-center">
          <div className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
            {sponsor.icon}
          </div>
          {sponsor.name !== sponsor.icon && (
            <div className="text-sm text-cyan-200 font-medium">
              {sponsor.name}
            </div>
          )}
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* External glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
    </div>
  )

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Moving Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridFloat 25s linear infinite'
          }}
        ></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-cyan-400/40 transform rotate-45 animate-spin delay-300" style={{animation: 'spin 8s linear infinite'}}></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-2 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Glow Effect Behind Title */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-600/30 scale-110"></div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 relative leading-tight">
              <span className="text-white drop-shadow-2xl tracking-tight" style={{textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'}}>OUR</span>
              <br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 tracking-tight"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-flow 4s ease infinite'
                }}
              >
                SPONSORS
              </span>
            </h2>
            
            {/* Decorative Polygon Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-cyan-400/60 transform rotate-12"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-r-4 border-t-4 border-blue-400/60 transform -rotate-12"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-4 border-b-4 border-cyan-500/60 transform -rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-blue-500/60 transform rotate-12"></div>
          </div>
          
          {/* Subtitle */}
          <div className="relative mt-8">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-cyan-400/30 px-8 py-4 rounded-2xl inline-block">
              <p className="text-lg md:text-xl text-cyan-200 leading-relaxed tracking-wide">
                Powered by industry leaders who believe in innovation
              </p>
            </div>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Platinum Tier */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white tracking-wider">
              PLATINUM
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {sponsors.platinum.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white tracking-wider">
              GOLD
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white tracking-wider">
              SILVER
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="silver" />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action for Potential Sponsors */}
        <div className="text-center mt-24">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sponsoring</span>?
              </h3>
              <p className="text-gray-300 mb-6">
                Join these amazing companies in supporting the next generation of innovators
              </p>
              
              <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 uppercase tracking-wide overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 z-10">
                  Become A Sponsor
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
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

export default Sponsors