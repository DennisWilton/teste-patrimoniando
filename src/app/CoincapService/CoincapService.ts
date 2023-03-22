import axios from 'axios';

export default class CoincapService {
  API_URL = 'https://api.coincap.io/v2';

  async getAvailableAssets() {
    try {
      const { data } = await axios.get<{
        data: { symbol: string; priceUsd: string; name: string }[];
      }>(`${this.API_URL}/assets?limit=20`);
      return {
        data: {
          data: data.data.map((item) => ({
            ...item,
            priceUsd: Number(item.priceUsd),
          })),
        },
      };
    } catch (err) {
      console.error(`Could not fetch assets data`);
    }
  }

  async getRate(rateId: string) {
    try {
      const { data } = await axios.get<{
        data: {
          rateUsd: string;
          id: string;
          symbol: string;
        };
      }>(`${this.API_URL}/rates/${rateId}`);

      return {
        rate: Number(data.data.rateUsd),
        id: data.data.id,
        symbol: data.data.symbol,
      };
    } catch (e) {
      console.error(`Could not get rate for ${rateId}`);
    }
  }
}
