import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden gradient-bg text-white section-padding pt-32 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-conference-gold/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-conference-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-conference-teal/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-conference-emerald/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-bounce-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair mb-8 leading-tight text-shadow">
              Global Property Conference{" "}
              <span className="gradient-text">2025</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light text-shadow">
              Convene. Connect. <span className="text-conference-gold">Conquer Real Estate.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg animate-slide-up glass-effect rounded-2xl p-6 backdrop-blur-lg" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-conference-gold animate-bounce" />
              <span className="font-semibold">October 25, 2025</span>
            </div>
            <span className="hidden sm:block text-conference-gold">|</span>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-conference-gold animate-pulse" />
              <span className="font-bold text-conference-gold text-xl">FREE Entry - Limited to 500 Attendees</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <Button 
              onClick={scrollToRegister}
              size="lg" 
              className="group bg-gradient-to-r from-conference-gold to-conference-light-gold hover:from-conference-light-gold hover:to-conference-gold text-white text-xl px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-pulse-glow font-bold"
            >
              <span className="flex items-center gap-3">
                Register Now - FREE
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-conference-navy border-2 border-white hover:bg-conference-navy hover:text-white hover:border-conference-gold text-xl px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl font-semibold"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* 3D floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
