
import { Users, Calendar, User, MapPin, Zap } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Master Lead Generation & Conversion",
      description: "Learn the exact multi-channel funnels top agents use to fill their pipelines—and close deals at record speed.",
      color: "from-conference-purple to-conference-indigo"
    },
    {
      icon: Calendar,
      title: "Navigate Financing & Regulations",
      description: "Demystify lending, joint ventures, tax incentives, and compliance so you can structure deals with confidence.",
      color: "from-conference-teal to-conference-emerald"
    },
    {
      icon: User,
      title: "Build Your Personal Brand",
      description: "Position yourself as the go-to authority in your market with proven StoryBrand frameworks and social-proof tactics.",
      color: "from-conference-gold to-conference-light-gold"
    },
    {
      icon: MapPin,
      title: "Scale Your Business",
      description: "Adopt the systems, team-building strategies, and tech stack that fuel 7-figure agencies.",
      color: "from-conference-rose to-red-400"
    },
    {
      icon: Zap,
      title: "Forge High-Value Connections",
      description: "Network face-to-face with mentors, capital partners, developers, and service providers ready to collaborate.",
      color: "from-conference-navy to-conference-dark-blue"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-gray-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 bg-conference-gold rounded-full animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-8 animate-fade-in">
            At <span className="gradient-text">GPC 2025</span>, you'll:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group perspective-1000"
            >
              <div 
                className="glass-effect bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl hover-3d transition-all duration-700 animate-slide-up border border-white/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon container with 3D effect */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-conference-gold rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-conference-navy group-hover:text-conference-purple transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {benefit.description}
                </p>
                
                {/* Hover effect bar */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
