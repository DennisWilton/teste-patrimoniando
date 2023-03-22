import { randomBetween } from './NumberUtils';

const dataOscilation: {
  [K: string]: { price: () => number; qty: () => number };
} = {
  BTC: {
    price: () => randomBetween(13000000, 18000000) / 10 ** 2,
    qty: () => randomBetween(1000, 9000) / 10 ** 6,
  },
  ETH: {
    price: () => randomBetween(1000, 9000),
    qty: () => randomBetween(1, 100) / 10 ** 6,
  },
  USDT: {
    price: () => randomBetween(1, 10),
    qty: () => randomBetween(10, 100),
  },
  UNKNOWN: {
    price: () => randomBetween(1000, 9000),
    qty: () => randomBetween(1, 100),
  },
};

export function getAssetOperationFakeData(args: { symbol: string }) {
  const data = dataOscilation[args.symbol] ?? dataOscilation.UNKNOWN;
  return {
    price: data.price(),
    qty: data.qty(),
    side: (Math.random() > 0.5 ? 'Compra' : 'Venda') as 'Compra' | 'Venda',
  };
}
