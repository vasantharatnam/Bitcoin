const SubHeader = () => {
    const tabs = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];
  
    return (
      <nav className="flex gap-4 border-b py-2 px-6 bg-white shadow-md">
        {tabs.map((tab, index) => (
          <a key={index} href="#" className={`text-gray-600 hover:text-blue-600 ${index === 0 ? "text-blue-600 font-bold" : ""}`}>
            {tab}
          </a>
        ))}
      </nav>
    );
  };
  
  export default SubHeader;
  