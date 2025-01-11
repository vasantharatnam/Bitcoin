const AboutBitcoin = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6">About Bitcoin</h2>
  
        {/* What is Bitcoin Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">What is Bitcoin?</h3>
          <p className="text-sm text-gray-600">
            Bitcoin's price today is USD $16,951.82, with a 24-hour trading volume
            of $191.84. BTC is +0.36% in the last 24 hours. It is currently -7.70%
            from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
            all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
            and a max supply of 21 M BTC.
          </p>
        </div>
  
        {/* Additional Details Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
            tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
            Viverra diam suspendisse enim facilisis diam id est sed. Quam scelerisque
            fermentum sapien morbi sodales odio sed rhoncus. Ultrices urna volutpat
            pendisse enim facilisis diam ut sed. Quam scelerisque fermentum sapien
            morbi sodales odio sed rhoncus.
          </p>
          <p className="text-sm text-gray-600">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
            vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
            felis pellentesque interdum. Odio cursus phasellus velit in senectus
            enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
            magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
            massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
            phasellus. Integer pellentesque enim convallis ultricies at.
          </p>
        </div>
  
        {/* Cards Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Already Holding Bitcoin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="p-4 bg-green-100 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">
                💰
              </div>
              <div>
                <h4 className="text-md font-bold text-green-600 mb-2">
                  Calculate your Profits
                </h4>
                <button className="text-sm font-bold text-blue-600">
                  Check Now →
                </button>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="p-4 bg-blue-100 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                📊
              </div>
              <div>
                <h4 className="text-md font-bold text-blue-600 mb-2">
                  Calculate your tax liability
                </h4>
                <button className="text-sm font-bold text-blue-600">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Text */}
        <p className="text-sm text-gray-600">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel
          convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
          risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui.
          Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>
      </div>
    );
  };
  
  export default AboutBitcoin;
  