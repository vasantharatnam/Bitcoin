const Header = () => {
    return (
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm border-b">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 flex items-center">
          Koin<span className="text-yellow-500">X</span>
        </div>
  
        {/* Navigation */}
        <nav className="flex gap-8 text-sm">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Crypto Taxes
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Free Tools
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Resource Center
          </a>
        </nav>
  
        {/* Get Started Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
          Get Started
        </button>
      </header>
    );
  };
  
  export default Header;
  