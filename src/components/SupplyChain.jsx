const SupplyChain = () => {
  return (
    <section id="supply-chain" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kalaka-purple mb-4">Supply Chain & Footprint</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Connecting global fertilizer production to African agricultural markets through
            reliable, efficient supply chain networks.
          </p>
        </div>

        {/* Logistics Images */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <img
            src="/Kalaka-Website/assets/kalaka/Shipment.png"
            alt="Fertilizer shipment operations"
            className="rounded-lg shadow-xl w-full h-56 object-cover border-2 border-kalaka-gold/30"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&auto=format&fit=crop&q=60';
            }}
          />
          <img
            src="/Kalaka-Website/assets/kalaka/BreakBulls.png"
            alt="Break bulk operations"
            className="rounded-lg shadow-xl w-full h-56 object-cover border-2 border-kalaka-gold/30"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60';
            }}
          />
          <img
            src="/Kalaka-Website/assets/kalaka/JumboBagsAtNight.png"
            alt="Night operations"
            className="rounded-lg shadow-xl w-full h-56 object-cover border-2 border-kalaka-gold/30"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60';
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Supply Chain Overview */}
          <div className="bg-gradient-to-br from-kalaka-purple via-purple-900 to-kalaka-purple text-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-kalaka-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Supply Chain Overview
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-kalaka-gold text-2xl mr-3">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Source Regions</h4>
                  <p className="text-gray-200">Strategic sourcing from Middle East, Asia, and other global production hubs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kalaka-gold text-2xl mr-3">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Shipment Modes</h4>
                  <p className="text-gray-200">Bulk and containerized shipments tailored to volume requirements</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kalaka-gold text-2xl mr-3">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Logistics Partners</h4>
                  <p className="text-gray-200">Coordination with local logistics networks for last-mile delivery</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kalaka-gold text-2xl mr-3">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Security of Supply</h4>
                  <p className="text-gray-200">Emphasis on consistent availability and timely delivery schedules</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Destination Markets & Partners */}
          <div className="bg-purple-50 rounded-lg p-8 shadow-lg border-2 border-kalaka-gold">
            <h3 className="text-2xl font-bold text-kalaka-purple mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-kalaka-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Destination Markets & Partners
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-kalaka-purple mb-3">Target Counterparties:</h4>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg border-l-4 border-kalaka-purple shadow-sm">
                  <p className="font-medium text-kalaka-purple">Agricultural Cooperatives</p>
                  <p className="text-sm text-gray-600">Supporting farmer organizations with bulk supply</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-kalaka-purple shadow-sm">
                  <p className="font-medium text-kalaka-purple">Blenders & Wholesalers</p>
                  <p className="text-sm text-gray-600">Raw materials for custom formulation operations</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-kalaka-purple shadow-sm">
                  <p className="font-medium text-kalaka-purple">Government & Parastatals</p>
                  <p className="text-sm text-gray-600">Tender participation for national programs</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-kalaka-purple shadow-sm">
                  <p className="font-medium text-kalaka-purple">Commercial Farms</p>
                  <p className="text-sm text-gray-600">Direct supply for large-scale operations</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-kalaka-gold p-4 rounded shadow-sm">
              <h4 className="font-semibold text-kalaka-purple mb-2">Focus Regions (to be confirmed):</h4>
              <p className="text-gray-700 text-sm">
                Primary markets include SADC, East Africa, West Africa, and other strategic regions.
                Detailed market footprint map and regional partnerships to be finalized with Kalaka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
