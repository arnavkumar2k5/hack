import React from 'react'

function About() {
  const features = [
    {
      icon: "�",
      title: "Innovation First",
      description: "Build groundbreaking solutions that solve real-world problems using the latest technologies."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Work alongside talented developers, designers, and entrepreneurs in diverse teams."
    },
    {
      icon: "�",
      title: "Skill Development",
      description: "Level up your technical skills through hands-on workshops and expert mentorship."
    },
    {
      icon: "�",
      title: "Career Boost",
      description: "Network with industry leaders and discover exciting career opportunities."
    }
  ]

  const stats = [
    { number: "500+", label: "Hackers", description: "Passionate developers joining" },
    { number: "48", label: "Hours", description: "Non-stop coding marathon" },
    { number: "$50K", label: "Prizes", description: "Total prize pool available" },
    { number: "20+", label: "Mentors", description: "Industry experts helping" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        ></div>
        
        {/* Floating Orbs */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Clean Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="relative inline-block">
            {/* Glow Effect Behind Title */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 scale-110"></div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 relative leading-tight">
              <span className="text-white drop-shadow-2xl tracking-tight">ABOUT</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 animate-gradient-flow tracking-tight">
                THE EVENT
              </span>
            </h2>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-l-4 border-t-4 border-blue-400/60"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-r-4 border-t-4 border-cyan-400/60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-4 border-b-4 border-cyan-500/60"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-4 border-b-4 border-blue-500/60"></div>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="relative mt-12 animate-slideUp delay-300">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-blue-400/30 px-8 py-4 rounded-2xl inline-block">
              <p className="text-lg md:text-xl text-blue-200 leading-relaxed tracking-wide">
                Join the ultimate hackathon experience where innovation meets opportunity.<br />
                <span className="text-cyan-300">Quantum Forge brings together the brightest minds to create solutions that reshape reality.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Clean Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What to Expect Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expect</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 h-full transform group-hover:-translate-y-2 transition-all duration-300 hover:border-cyan-400/40">
                  <div className="text-center">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Timeline */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Build the Future</span>?
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us for 48 hours of innovation, learning, and building amazing projects that could change the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
              <span className="flex items-center gap-2">
                Register Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-cyan-400/50 text-white font-semibold rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              View Schedule
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About