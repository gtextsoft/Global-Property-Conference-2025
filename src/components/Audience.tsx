
export const Audience = () => {
  const audiences = [
    "New & Aspiring Realtors seeking a clear roadmap to launch with impact",
    "Agents hungry to outpace competitors and dominate new territories",
    "Investors & Developers looking to partner with top-performing sales professionals",
    "Service Providers (lenders, architects, lawyers) wanting to deepen industry relationships"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-12">
            Who Should <span className="gradient-text">Attend?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-conference-navy to-conference-dark-blue text-white p-6 rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-conference-gold rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
