import { reactive } from 'vue';
import { floorTo } from '../../utils/NumberUtils';

type Operation = {
  qty: number;
  date: Date;
  side: 'Compra' | 'Venda';
  price: number;
};

export class Position {
  operations: Operation[] = reactive([]);

  constructor(public symbol: string) {}

  get qty() {
    return this.operations.reduce((acc, op) => acc + op.qty, 0);
  }

  get avgPrice() {
    return floorTo(
      this.operations.reduce((acc, op) => acc + op.qty * op.price, 0) /
        this.qty,
      2
    );
  }

  addOperation(operation: Operation) {
    this.operations.push(operation);
  }

  clearPosition() {
    this.operations.splice(0);
  }
}
