const Value = () => {
  const values = [
    {
      title: 'Unlock supply through relationships',
      description: 'Deep connections with global producers ensure access to reliable fertilizer sources',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Long-term partnerships, not just spot trades',
      description: 'Building sustainable relationships that support multi-season planning and growth',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Understanding African infrastructure realities',
      description: 'Tailored logistics and delivery solutions that work within existing systems',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Support for coordinated supply strategies',
      description: 'Assistance with procurement planning, financing coordination, and timing optimization',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const markets = [
    'Government & parastatal tenders',
    'Co-op & farmer organisations',
    'Blenders & wholesalers',
    'Development agencies / NGOs',
  ];

  return (
    <section id="value" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src="/Kalaka-Website/assets/kalaka/FertilizerHand.png"
            alt="Quality fertilizer"
            className="rounded-lg shadow-2xl w-full max-w-3xl h-96 object-cover border-4 border-kalaka-gold"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=60';
            }}
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kalaka-purple mb-4">Value Proposition</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Why partners across Africa choose Kalaka for their fertilizer supply needs
          </p>
        </div>

        {/* Why Partners Choose Kalaka */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-kalaka-gold"
            >
              <div className="text-kalaka-purple mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-kalaka-purple mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Strategic Markets & Programmes */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-kalaka-gold">
          <h3 className="text-2xl font-bold text-kalaka-purple mb-6 text-center">
            Strategic Markets & Programmes
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {markets.map((market, index) => (
              <div
                key={index}
                className="bg-kalaka-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200 shadow-md"
              >
                {market}
              </div>
            ))}
          </div>

          <div className="bg-purple-50 border-l-4 border-kalaka-gold p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold text-kalaka-purple mb-2">Case Studies (Future Content)</h4>
            <p className="text-gray-700">
              Success stories and case studies showcasing partnerships and project outcomes will be
              added once approved by Kalaka. These will demonstrate real-world impact across different
              market segments and regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
