const GettingStarted = () => {
    return (
      <div className="p-8 bg-blue-600 text-white text-center rounded-lg shadow-lg">
        {/* Header Section */}
        <h2 className="text-3xl font-extrabold mb-4">
          Get Started with KoinX for FREE
        </h2>
  
        {/* Description */}
        <p className="text-lg mb-6">
          With our range of features that you can equip for free, KoinX allows you
          to be more educated and aware of your tax reports.
        </p>
  
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="Frame.png" // Replace with the actual image URL for illustration
            alt="Illustration"
            className="w-40 h-auto"
          />
        </div>
  
        {/* Button */}
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-100 shadow-md">
          Get Started for FREE →
        </button>
      </div>
    );
  };
  
  export default GettingStarted;
  