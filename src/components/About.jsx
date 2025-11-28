const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-kalaka-purple mb-6">About Kalaka South Mining SA</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kalaka South Mining SA is the fertilizer-focused arm of the broader Kalaka Group.
              We specialize in the sourcing, aggregation, and delivery of essential fertilizer inputs
              that power African agriculture.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to bridge the gap between global fertilizer producers and the African
              agricultural sector, ensuring reliable supply chains that support sustainable growth
              across the continent.
            </p>

            <div className="bg-purple-50 border-l-4 border-kalaka-gold p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-kalaka-purple mb-4">
                Draft content – to be confirmed with Kalaka:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kalaka-gold mr-2 text-xl">•</span>
                  Exact organizational mandate and scope
                </li>
                <li className="flex items-start">
                  <span className="text-kalaka-gold mr-2 text-xl">•</span>
                  Relationship to other Kalaka Group entities
                </li>
                <li className="flex items-start">
                  <span className="text-kalaka-gold mr-2 text-xl">•</span>
                  Primary focus regions and target crops
                </li>
                <li className="flex items-start">
                  <span className="text-kalaka-gold mr-2 text-xl">•</span>
                  Key milestones and strategic partnerships
                </li>
                <li className="flex items-start">
                  <span className="text-kalaka-gold mr-2 text-xl">•</span>
                  Operational history and achievements
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <img
                src="/Kalaka-Website/assets/kalaka/Fertilizer.png"
                alt="Fertilizer products"
                className="rounded-lg shadow-xl w-full h-80 object-cover border-2 border-kalaka-gold/30"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&auto=format&fit=crop&q=60';
                }}
              />
              <img
                src="/Kalaka-Website/assets/kalaka/FertilizerSorting.png"
                alt="Fertilizer sorting operations"
                className="rounded-lg shadow-xl w-full h-64 object-cover border-2 border-kalaka-gold/30"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&auto=format&fit=crop&q=60';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
