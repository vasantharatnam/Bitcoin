import React, { useEffect, useState } from "react";
import { getTrendingCoins } from "../api/cryptoApi";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const data = await getTrendingCoins();
        // Set only the top 3 coins
        setCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4"> Trending Coins (24h)</h2>

      {/* Coin List */}
      <ul className="space-y-4">
        {coins.map((coin, index) => {
          const { item } = coin;

          // Safeguard against missing data
          const priceChange =
            parseFloat(item.data?.price_change_percentage_24h?.usd) || 0;
          const isPositive = priceChange > 0;
          const formattedChange = priceChange.toFixed(2);
          const sparklineUrl = item.data?.sparkline || "";

          return (
            <li
              key={item.id || index}
              className="flex justify-between items-center text-gray-700"
            >
              {/* Left Section: Coin Icon and Name */}
              <div className="flex items-center gap-3">
                {/* Coin Icon */}
                <img
                  src={item.small}
                  alt={`${item.name} icon`}
                  className="w-6 h-6"
                />
                {/* Coin Name and Symbol */}
                <span className="font-medium">
                  {item.name} ({item.symbol.toUpperCase()})
                </span>
              </div>

              {/* Right Section: Percentage Change and Sparkline */}
              <div className="flex items-center gap-4">
                {/* Percentage Change */}
                <span
                  className={`text-sm font-bold ${
                    isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isPositive ? "▲" : "▼"} {Math.abs(formattedChange)}%
                </span>

                {/* Sparkline Image */}
                {/* {sparklineUrl ? (
                  <img
                    src={sparklineUrl}
                    alt={`${item.name} sparkline`}
                    className="w-24 h-6 object-contain"
                  />
                ) : (
                  <span className="text-xs text-gray-400">No sparkline</span>
                )} */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendingCoins;