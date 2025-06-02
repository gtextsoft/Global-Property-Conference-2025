
export const PainPoints = () => {
  const painPoints = [
    "Struggling to generate consistent leads in a crowded market?",
    "Overwhelmed by financing options, regulations, and rising construction costs?",
    "Unsure how to position yourself as an expert and stand out?",
    "Stuck scaling beyond one-off deals or first-time flips?"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-conference-purple rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-conference-teal rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-12 animate-fade-in">
            Does any of these describe your <span className="gradient-text">reality?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="group glass-effect bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border-l-4 border-red-500 text-left hover-3d transition-all duration-700 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse opacity-75"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">{point}</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="glass-effect bg-red-50/80 backdrop-blur-lg p-8 rounded-2xl border border-red-200 animate-bounce-in">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              We've all been there—and if you don't solve these challenges now,{" "}
              <span className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-lg">your competition will.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
