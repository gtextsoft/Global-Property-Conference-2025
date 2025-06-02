
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-xl bg-white/80 border-b border-white/20 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold gradient-text font-playfair animate-pulse">
              GPC 2025
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['about', 'benefits', 'speaker'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-conference-purple transition-all duration-300 font-medium text-lg capitalize relative group"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-conference-purple transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-conference-gold to-conference-light-gold hover:from-conference-light-gold hover:to-conference-gold text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
            >
              Register Now
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-conference-navy" />
              ) : (
                <Menu className="w-6 h-6 text-conference-navy" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20 glass-effect rounded-b-xl">
            <div className="flex flex-col space-y-6">
              {['about', 'benefits', 'speaker'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-700 hover:text-conference-purple transition-colors text-lg capitalize font-medium"
                >
                  {section}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-conference-gold to-conference-light-gold hover:from-conference-light-gold hover:to-conference-gold text-white w-full py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
