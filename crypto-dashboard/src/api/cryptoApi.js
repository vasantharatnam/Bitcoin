import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getTrendingCoins = async () => {
  const response = await axios.get(`${BASE_URL}/search/trending`);
  return response.data;
};

export const getCoinDetails = async (coinId) => {
  const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return response.data;
};

export const getMarketData = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets`,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: true,
      },
    }
  );
  return response.data;
};
