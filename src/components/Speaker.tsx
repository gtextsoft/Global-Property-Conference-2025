
export const Speaker = () => {
  return (
    <section id="speaker" className="section-padding bg-gradient-to-br from-gray-900 to-conference-navy text-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Your <span className="text-conference-gold">Convener</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold font-playfair text-conference-gold">
                Dr. Stephen Akintayo
              </h3>
              
              <p className="text-xl text-gray-300 font-medium">
                Founder, Gtext Holdings & Visionary Real Estate Strategist
              </p>
              
              <p className="text-lg leading-relaxed text-gray-200">
                With two decades of deal-making across Africa, Europe, and the Middle East, 
                Dr. Akintayo knows what it takes to thrive in any market. He'll be joined by 
                elite guests, including developers, financiers, and thought leaders shaping 
                property's future.
              </p>
              
              <div className="bg-conference-gold/10 border border-conference-gold/30 p-6 rounded-lg">
                <p className="text-conference-gold font-semibold text-lg">
                  "Success in real estate isn't about the market you're in—it's about the 
                  strategies you deploy and the connections you forge."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-conference-gold to-conference-light-gold p-1 rounded-2xl">
                <div className="bg-gray-800 p-8 rounded-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-conference-navy to-conference-dark-blue rounded-lg overflow-hidden">
                    <img 
                      src="https://tribuneonlineng.com/wp-content/uploads/2021/02/81D7DAA6-B584-40F8-BBD2-55EA033237AC.jpeg"
                      alt="Dr. Stephen Akintayo"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
