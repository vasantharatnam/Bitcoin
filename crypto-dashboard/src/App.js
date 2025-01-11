import React from "react";
import Header from "./components/Header";
import BitcoinOverview from "./components/BitcoinOverview";
import GettingStarted from "./components/GettingStarted";
import TrendingCoins from "./components/TrendingCoins";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import Team from "./components/Team";


const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 space-y-6">

        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            <BitcoinOverview />
            <SubHeader />
            <Performance />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <Team/>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <GettingStarted />
            <TrendingCoins />
          </div>
        </div>
         
        {/* Tokenomics Section */}

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
