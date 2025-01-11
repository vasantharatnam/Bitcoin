const Tokenomics = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6">Tokenomics</h2>
  
        {/* Chart Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-4">Initial Distribution</h3>
          <div className="flex items-center">
            {/* Chart Placeholder */}
            <div className="w-1/3">
              <div className="relative w-32 h-32 mx-auto">
                {/* Outer Circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full"></div>
                {/* Inner Circle */}
                <div className="absolute inset-4 bg-white rounded-full"></div>
              </div>
            </div>
  
            {/* Legend */}
            <div className="w-2/3 pl-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <p className="text-sm text-gray-600">
                  Crowdsale investors: <span className="font-bold">80%</span>
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <p className="text-sm text-gray-600">
                  Foundation: <span className="font-bold">20%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Description */}
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet
          enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce
          adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue.
          Gravida aliquam fermentum augue eu.
        </p>
      </div>
    );
  };
  
  export default Tokenomics;
  