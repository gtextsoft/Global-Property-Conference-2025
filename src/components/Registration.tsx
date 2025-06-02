
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";

export const Registration = () => {
  const handleRegister = () => {
    // In a real implementation, this would open a registration form or redirect to a registration page
    alert("Registration form would open here. This is a demo implementation.");
  };

  return (
    <section id="register" className="section-padding bg-gradient-to-br from-conference-navy via-blue-800 to-conference-dark-blue text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8">
            Reserve Your <span className="text-conference-gold">Seat Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Join us on October 25, 2025 for the real estate event that transforms careers—and lives.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-conference-gold mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">October 25, 2025</h3>
              <p className="text-gray-300">One powerful day</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-8 h-8 text-conference-gold mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Limited to 500</h3>
              <p className="text-gray-300">Exclusive networking</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-conference-gold mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">FREE Entry</h3>
              <p className="text-gray-300">Registration required</p>
            </div>
          </div>
          
          <div className="bg-red-600/20 border border-red-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold mb-2">
              ⚠️ Entry is FREE but registration is compulsory
            </p>
            <p className="text-gray-200">
              Only 500 spots available and it closes once all seats are taken
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={handleRegister}
              size="lg" 
              className="bg-conference-gold hover:bg-conference-light-gold text-white text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-bold"
            >
              Register Now for FREE
            </Button>
            
            <p className="text-gray-300">
              Don't let another market cycle pass you by.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="border-t border-white/20 pt-8">
          <p className="text-gray-400">
            © 2025 Global Property Conference. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
