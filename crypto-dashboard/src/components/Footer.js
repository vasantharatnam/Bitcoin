import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

// Coin Card Component
const CoinCard = ({ coin }) => {
  const chartData = {
    labels: coin.sparkline_in_7d.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        data: coin.sparkline_in_7d,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="min-w-[200px] p-4 bg-white shadow-sm rounded-lg">
      {/* Coin Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
          <span className="text-sm font-semibold">{coin.symbol.toUpperCase()}</span>
        </div>
        <span
          className={`text-sm font-semibold ${
            coin.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {coin.price_change_percentage_24h > 0 ? "+" : ""}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>

      {/* Coin Price */}
      <p className="text-lg font-bold mb-2">${coin.current_price.toFixed(2)}</p>

      {/* Coin Sparkline */}
      <div className="h-16">
        {coin.sparkline_in_7d ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className="text-xs text-gray-400 text-center pt-5">No Data</p>
        )}
      </div>
    </div>
  );
};

// Coin Carousel Component
const CoinCarousel = ({ title, coins }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {coins.map((coin, index) => (
          <CoinCard key={index} coin={coin} />
        ))}
      </div>
    </div>
  );
};

// Main Coins Section
const CoinsSection = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        // Use the CoinGecko markets endpoint to get sparkline data
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: true,
              price_change_percentage: "24h",
            },
          }
        );

        const fetchedCoins = response.data.map((coin) => ({
          name: coin.name,
          symbol: coin.symbol,
          image: coin.image,
          current_price: coin.current_price,
          price_change_percentage_24h: coin.price_change_percentage_24h,
          sparkline_in_7d: coin.sparkline_in_7d?.price || [],
        }));
        setCoins(fetchedCoins);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <CoinCarousel title="You May Also Like" coins={coins} />
      <CoinCarousel title="Trending Coins" coins={coins} />
    </div>
  );
};

export default CoinsSection;
