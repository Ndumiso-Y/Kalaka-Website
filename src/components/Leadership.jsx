const Leadership = () => {
  const leaders = [
    {
      name: 'To be confirmed',
      title: 'Chief Executive Officer',
      role: 'Strategic direction and overall organizational leadership',
      image: 'CEO.png',
    },
    {
      name: 'To be confirmed',
      title: 'Chief Financial Officer',
      role: 'Financial strategy, risk management, and fiscal oversight',
      image: 'CFO.png',
    },
    {
      name: 'To be confirmed',
      title: 'Operations Director',
      role: 'Supply chain execution, logistics coordination, and delivery',
      image: 'OperationsDirector.png',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kalaka-purple mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experienced professionals driving Kalaka's fertilizer supply mission across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-kalaka-gold"
            >
              <div className="h-80 bg-gradient-to-br from-kalaka-purple to-purple-900 flex items-center justify-center">
                <img
                  src={`/Kalaka-Website/assets/kalaka/${leader.image}`}
                  alt={leader.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <svg class="w-32 h-32 text-kalaka-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    `;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-kalaka-purple mb-2">{leader.name}</h3>
                <p className="text-kalaka-gold font-semibold mb-3">{leader.title}</p>
                <p className="text-gray-600 text-sm">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Content Checklist */}
        <div className="bg-purple-50 border-l-4 border-kalaka-gold p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-kalaka-purple mb-6">
            Leadership Content Checklist
          </h3>
          <p className="text-gray-700 mb-4">
            The following information is required from Kalaka to complete this section:
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Final list of leadership team members and titles</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Professional headshots for each leader (high-resolution)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Professional biographies (200-300 words each)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Key achievements and expertise areas</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Governance structure and board information (if applicable)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kalaka-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">LinkedIn profiles or social media links (optional)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
