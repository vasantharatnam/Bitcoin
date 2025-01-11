import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getMarketData } from "../api/cryptoApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BitcoinOverview = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const data = await getMarketData();
      const bitcoin = data.find((coin) => coin.id === "bitcoin");

      // Set Bitcoin Data
      setBitcoinData(bitcoin);

      // Prepare Chart Data
      if (bitcoin && bitcoin.sparkline_in_7d?.price) {
        setChartData({
          labels: Array.from({ length: bitcoin.sparkline_in_7d.price.length }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Price (USD)",
              data: bitcoin.sparkline_in_7d.price,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.4,
            },
          ],
        });
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {bitcoinData ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin Logo"
                className="w-10 h-10 mr-2"
              />
              <h2 className="text-2xl font-bold">Bitcoin BTC</h2>
            </div>
            <div className="px-3 py-1 bg-gray-200 text-sm font-semibold text-gray-800 rounded">
              Rank #1
            </div>
          </div>

          {/* Price Information */}
          <div className="mb-4">
            <div className="text-4xl font-bold text-green-600 mb-1">
              ${bitcoinData.current_price.toFixed(2)}
            </div>
            <div className="text-sm font-semibold text-gray-500">
              ₹{(bitcoinData.current_price * 74).toFixed(2)} (approx.)
            </div>
          </div>

          {/* Chart Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bitcoin Price Chart (Last 7 Days)</h3>
            {chartData ? (
              <Line data={chartData} options={{ responsive: true }} />
            ) : (
              <p className="text-gray-500">Loading chart...</p>
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default BitcoinOverview;
