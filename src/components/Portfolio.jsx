const Portfolio = () => {
  const products = [
    {
      name: 'Urea 46%',
      description: 'High-nitrogen fertilizer ideal for boosting crop yields and protein content in cereals.',
      form: 'Granular/Prilled',
      uses: 'Cereals, sugarcane, vegetables',
    },
    {
      name: 'Ammonium Sulphate',
      description: 'Dual-nutrient fertilizer providing both nitrogen and sulphur for improved crop quality.',
      form: 'Crystalline/Granular',
      uses: 'Oilseeds, legumes, pastures',
    },
    {
      name: 'CAN & NPK Inputs',
      description: 'Balanced nutrient solutions for diverse crop requirements and soil conditions.',
      form: 'Granular blends',
      uses: 'Multi-crop applications',
    },
    {
      name: 'Phosphate Fertilizers',
      description: 'DAP, TSP, and GSSP for root development and early-stage crop establishment.',
      form: 'Granular',
      uses: 'Root crops, cereals, vegetables',
      badge: 'Pending confirmation',
    },
    {
      name: 'Potash & Specialty',
      description: 'MOP, SOP and specialty potassium sources for quality and stress tolerance.',
      form: 'Granular/Soluble',
      uses: 'Fruits, vegetables, high-value crops',
    },
    {
      name: 'Custom & Future Products',
      description: 'Fortified, stabilized nitrogen, slow-release formulations, and customized blends.',
      form: 'Various formats',
      uses: 'Precision agriculture applications',
      badge: 'Future offerings',
    },
  ];

  return (
    <section id="fertilizers" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-kalaka-purple mb-4">Fertilizer Portfolio</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive range of fertilizer inputs designed to meet the diverse needs of African agriculture.
          </p>
          <div className="flex justify-center mb-12">
            <img
              src="/Kalaka-Website/assets/kalaka/JumboBags.png"
              alt="Fertilizer jumbo bags"
              className="rounded-lg shadow-2xl w-full max-w-2xl h-80 object-cover border-4 border-kalaka-gold"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=60';
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-kalaka-gold hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-kalaka-purple">{product.name}</h3>
                {product.badge && (
                  <span className="bg-kalaka-gold text-kalaka-purple text-xs px-3 py-1 rounded-full font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-semibold text-kalaka-purple w-20">Form:</span>
                  <span className="text-gray-600">{product.form}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-kalaka-purple w-20">Uses:</span>
                  <span className="text-gray-600">{product.uses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 border-l-4 border-kalaka-gold p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-kalaka-purple mb-2">Technical Documentation (Future)</h4>
          <p className="text-gray-700">
            Technical Data Sheets (TDS) and Material Safety Data Sheets (MSDS) will be available
            for download once product specifications are confirmed with Kalaka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
