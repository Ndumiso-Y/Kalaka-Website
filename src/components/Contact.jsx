const Contact = () => {
  const assetChecklist = [
    'High-resolution logo (PNG + vector format if available)',
    'Selection of hero and operations images (fertilizer, trucks, ports, warehouses, fields)',
    'Final fertilizer product list with specifications',
    'Technical Data Sheets (TDS) and Material Safety Data Sheets (MSDS) where available',
    'Leadership photos and short biographies',
    'Confirmed contact details (address, phone, email)',
    'Legal and compliance notices or disclaimers',
    'Brand guidelines (colors, fonts, tone of voice)',
    'Company registration and certification documents',
    'Any existing marketing collateral or references',
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kalaka-green mb-4">
            Let's Align the Website with Your Fertilizer Strategy
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            This is a draft mockup structure. Once Kalaka completes the website brief and provides
            logos, images, and product documentation, Embark Digitals will finalize the site to
            accurately reflect your fertilizer business and market positioning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Action Buttons */}
          <div className="bg-gradient-to-br from-kalaka-green to-green-800 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Ready to finalize your fertilizer division website? Send us your completed brief with
              all necessary assets, or schedule an alignment call to discuss your requirements and
              strategic positioning.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@kalaka.co.za?subject=Website%20Brief%20and%20Assets"
                className="block w-full bg-kalaka-gold text-kalaka-green px-6 py-4 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-colors duration-200"
              >
                📧 Email completed brief & assets
              </a>
              <a
                href="mailto:info@kalaka.co.za?subject=Schedule%20Website%20Alignment%20Call"
                className="block w-full bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-kalaka-green transition-colors duration-200"
              >
                📞 Schedule alignment call
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-kalaka-gold">
            <h3 className="text-2xl font-bold text-kalaka-green mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-kalaka-green mb-2">Kalaka South Mining SA</h4>
                <p className="text-gray-600">Fertilizers Division</p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-amber-900 font-semibold mb-2">To be confirmed with Kalaka:</p>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Physical office address</li>
                  <li>• Primary phone number</li>
                  <li>• General inquiry email</li>
                  <li>• Sales/RFQ contact email</li>
                  <li>• Business hours</li>
                  <li>• Regional office locations (if applicable)</li>
                </ul>
              </div>

              <div className="pt-4 border-t-2 border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Embark Digitals</strong> (Agency)<br />
                  Project Owner: Ndumiso Yedwa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Media & Asset Checklist */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-kalaka-green">
          <h3 className="text-2xl font-bold text-kalaka-green mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Media & Asset Checklist for Kalaka
          </h3>
          <p className="text-gray-700 mb-6">
            Please provide the following assets to complete the website development:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {assetChecklist.map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-6 h-6 text-kalaka-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Submission Format</h4>
            <p className="text-blue-800 text-sm">
              Please organize all assets in clearly labeled folders and send via cloud storage link
              (Google Drive, Dropbox, etc.) or email to the Embark Digitals team. Include a brief
              document describing your brand positioning, target audiences, and any specific messaging
              requirements for the fertilizer division.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
