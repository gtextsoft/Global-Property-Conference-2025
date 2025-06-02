
export const ConferenceIntro = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-conference-gold rounded-full animate-rotate-3d"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-conference-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-conference-teal rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-8 animate-fade-in">
            Introducing: The{" "}
            <span className="gradient-text block mt-4">Global Property Conference 2025</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-gray-700 mb-12 leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.3s' }}>
            A one-day power gathering designed to crush your biggest real estate hurdles—and set you on a path of{" "}
            <span className="text-conference-gold font-bold bg-gradient-to-r from-conference-gold/20 to-conference-light-gold/20 px-4 py-2 rounded-lg">unstoppable growth.</span>
          </p>
          
          <div className="perspective-1000">
            <div className="glass-effect bg-gradient-to-r from-conference-navy/90 to-conference-dark-blue/90 backdrop-blur-xl text-white p-12 rounded-3xl shadow-2xl hover-3d animate-bounce-in transform transition-all duration-700" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-conference-gold">This is more than a conference—</h3>
              <p className="text-xl md:text-2xl font-light">it's the springboard for your next breakthrough.</p>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-conference-gold rounded-full animate-pulse flex items-center justify-center">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
