import { reactive } from 'vue';
import { getAssetOperationFakeData } from '../../utils/FakeUtils';
import { Position } from './Position';

class PositionManager {
  mapPosition = reactive(new Map<string, Position>());

  getOrCreatePosition(args: { symbol: string }) {
    const position = this.mapPosition.get(args.symbol);
    if (!position) {
      this.mapPosition.set(args.symbol, new Position(args.symbol));
    }
    return this.mapPosition.get(args.symbol)!;
  }

  updatePosition(args: { symbol: string; position: Position }) {
    this.mapPosition.set(args.symbol, args.position);
  }

  createFakePosition(args: { symbol: string; numOperations: number }) {
    const position = new Position(args.symbol);
    for (let i = 0; i < args.numOperations; i++) {
      const fakeOpData = getAssetOperationFakeData(args);
      position.addOperation({
        date: new Date(),
        price: fakeOpData.price,
        qty: fakeOpData.qty,
        side: fakeOpData.side,
      });
    }
    return position;
  }
}

export default new PositionManager();
