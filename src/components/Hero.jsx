const Hero = () => {
  return (
    <section id="hero" className="pt-20 bg-gradient-to-br from-kalaka-purple via-purple-900 to-kalaka-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-kalaka-gold/20 text-kalaka-gold border border-kalaka-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Draft website mockup – content to be confirmed with Kalaka
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Securing reliable fertilizer supply for African agriculture
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Kalaka South Mining SA is the fertilizer-focused arm of the Kalaka Group,
              connecting global fertilizer producers with cooperatives, blenders, governments,
              wholesalers, and large farms across Africa. We aggregate and deliver essential
              fertilizer inputs for sustainable agricultural growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-kalaka-gold text-kalaka-purple px-8 py-4 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-all duration-200 shadow-lg"
              >
                Request fertilizer RFQ
              </a>
              <a
                href="#fertilizers"
                className="bg-transparent border-2 border-kalaka-gold text-kalaka-gold px-8 py-4 rounded-lg font-semibold text-center hover:bg-kalaka-gold hover:text-kalaka-purple transition-all duration-200"
              >
                View fertilizer portfolio
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Kalaka-Website/assets/kalaka/Hero.png"
              alt="Fertilizer operations"
              className="rounded-lg shadow-xl w-full h-64 object-cover border-2 border-kalaka-gold/30"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&auto=format&fit=crop&q=60';
              }}
            />
            <img
              src="/Kalaka-Website/assets/kalaka/TruckDroppingFertilizer.png"
              alt="Fertilizer delivery"
              className="rounded-lg shadow-xl w-full h-64 object-cover mt-8 border-2 border-kalaka-gold/30"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60';
              }}
            />
            <img
              src="/Kalaka-Website/assets/kalaka/FertilizerDelivery.png"
              alt="Fertilizer supply chain"
              className="rounded-lg shadow-xl w-full h-64 object-cover -mt-8 border-2 border-kalaka-gold/30"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=500&auto=format&fit=crop&q=60';
              }}
            />
            <img
              src="/Kalaka-Website/assets/kalaka/JumboBags.png"
              alt="Fertilizer packaging"
              className="rounded-lg shadow-xl w-full h-64 object-cover border-2 border-kalaka-gold/30"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&auto=format&fit=crop&q=60';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
