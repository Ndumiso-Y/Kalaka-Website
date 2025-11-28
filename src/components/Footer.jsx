const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kalaka-purple text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-200">
              © {currentYear} Kalaka South Mining SA. Draft fertilizer website mockup.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-200">
              Draft design & structure by <span className="text-kalaka-gold font-semibold">Embark Digitals</span>.
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Content to be confirmed with Kalaka.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-purple-700 text-center">
          <p className="text-sm text-gray-300">
            Kalaka South Mining SA – Fertilizers & Supply Chain Division
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
