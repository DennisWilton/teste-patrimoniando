import { reactive } from 'vue';

class RateManager {
  mapRates = reactive(new Map<string, number>());

  constructor() {
    this.setRate('USD', 1);
  }

  setRate(currency: string, rate: number) {
    this.mapRates.set(currency, rate);
  }

  getRate(currency: string) {
    return this.mapRates.get(currency);
  }

  convert(to: string, amount: number, from: string = 'USD'): number {
    const rateTo = this.getRate(to);
    const rateFrom = this.getRate(from);
    if (rateTo && rateFrom) {
      return (amount * rateFrom) / rateTo;
    }
    console.error(`No rate for ${from} -> ${to}`);
    return 0;
  }
}

export default new RateManager();
