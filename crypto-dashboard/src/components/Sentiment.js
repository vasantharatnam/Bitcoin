const Sentiment = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6">Sentiment</h2>
  
        {/* Key Events Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold text-gray-600 mb-4 flex items-center">
            Key Events{" "}
            <span className="ml-2 text-gray-400 cursor-pointer">ℹ️</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Event Card 1 */}
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                  📄
                </div>
                <div>
                  <h4 className="text-md font-bold mb-1">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dui vel quis dignissim mattis enim tincidunt.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum.
              </p>
            </div>
  
            {/* Event Card 2 */}
            <div className="p-4 bg-green-50 rounded-lg shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full mr-3">
                  🔍
                </div>
                <div>
                  <h4 className="text-md font-bold mb-1">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dui vel quis dignissim mattis enim tincidunt.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum.
              </p>
            </div>
          </div>
        </div>
  
        {/* Analyst Estimates Section */}
        <div>
          <h3 className="text-md font-semibold text-gray-600 mb-4 flex items-center">
            Analyst Estimates{" "}
            <span className="ml-2 text-gray-400 cursor-pointer">ℹ️</span>
          </h3>
          <div className="flex items-center">
            {/* Buy Percentage */}
            <div className="w-20 h-20 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-6">
              <span className="text-3xl font-bold">76%</span>
            </div>
  
            {/* Details */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Buy</span>
                <span className="text-sm font-bold text-green-600">76%</span>
              </div>
              <div className="h-2 bg-green-100 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "76%" }}></div>
              </div>
  
              <div className="flex justify-between items-center my-2">
                <span className="text-sm text-gray-600">Hold</span>
                <span className="text-sm font-bold text-gray-600">8%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-gray-500 rounded-full" style={{ width: "8%" }}></div>
              </div>
  
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">Sell</span>
                <span className="text-sm font-bold text-red-600">16%</span>
              </div>
              <div className="h-2 bg-red-100 rounded-full">
                <div className="h-2 bg-red-500 rounded-full" style={{ width: "16%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sentiment;
  