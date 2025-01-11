const Performance = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6">Performance</h2>
  
        {/* Range Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <p>Today's Low</p>
            <p className="font-bold text-gray-800">46,930.22</p>
          </div>
          <div className="flex-1 mx-4 relative">
            <div className="h-2 bg-red-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
              <div
                className="absolute top-0 h-2 w-2 bg-black rounded-full transform -translate-x-1/2 translate-y-1/2"
                style={{ left: "60%" }}
              ></div>
            </div>
            <p className="text-xs text-center mt-1 text-gray-600">
              $48,637.83
            </p>
          </div>
          <div className="text-sm text-gray-600 text-right">
            <p>Today's High</p>
            <p className="font-bold text-gray-800">49,343.83</p>
          </div>
        </div>
  
        {/* Weekly Range */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <p>52W Low</p>
            <p className="font-bold text-gray-800">16,930.22</p>
          </div>
          <div className="flex-1 mx-4 relative">
            <div className="h-2 bg-red-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
              <div
                className="absolute top-0 h-2 w-2 bg-black rounded-full transform -translate-x-1/2 translate-y-1/2"
                style={{ left: "85%" }}
              ></div>
            </div>
            <p className="text-xs text-center mt-1 text-gray-600">
              $49,743.83
            </p>
          </div>
          <div className="text-sm text-gray-600 text-right">
            <p>52W High</p>
            <p className="font-bold text-gray-800">49,743.83</p>
          </div>
        </div>
  
        {/* Fundamentals Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Fundamentals</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Bitcoin Price</p>
              <p className="font-bold text-gray-800">$16,815.46</p>
            </div>
            <div>
              <p className="text-gray-500">Market Cap</p>
              <p className="font-bold text-gray-800">$323,507,290,047</p>
            </div>
            <div>
              <p className="text-gray-500">24h Low / 24h High</p>
              <p className="font-bold text-gray-800">$16,382.07 / $16,874.12</p>
            </div>
            <div>
              <p className="text-gray-500">Market Cap Dominance</p>
              <p className="font-bold text-gray-800">38.343%</p>
            </div>
            <div>
              <p className="text-gray-500">7d Low / 7d High</p>
              <p className="font-bold text-gray-800">$16,382.07 / $16,874.12</p>
            </div>
            <div>
              <p className="text-gray-500">Volume / Market Cap</p>
              <p className="font-bold text-gray-800">0.0718</p>
            </div>
            <div>
              <p className="text-gray-500">Trading Volume</p>
              <p className="font-bold text-gray-800">$23,249,202,782</p>
            </div>
            <div>
              <p className="text-gray-500">All-Time High</p>
              <p className="font-bold text-gray-800">$69,044.77</p>
              <p className="text-sm text-red-600">-75.6% Nov 10, 2021</p>
            </div>
            <div>
              <p className="text-gray-500">Market Cap Rank</p>
              <p className="font-bold text-gray-800">#1</p>
            </div>
            <div>
              <p className="text-gray-500">All-Time Low</p>
              <p className="font-bold text-gray-800">$67.81</p>
              <p className="text-sm text-green-600">24729.1% Jul 06, 2013</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Performance;
  