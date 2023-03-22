<template>
  <div class="operation-history">
    <div class="operation-history__header">
      <div class="operation-history__header__title">Histórico de Operações</div>
      <div class="operation-history__header__resume">
        {{ position.operations.length }} Operações |
        {{ currency(averagePrice) }}
      </div>
    </div>
    <div class="operation-history__table">
      <Table :data="data" :columns="columns"></Table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.operation-history {
  height: 100%;
  display: flex;
  flex-flow: column;
  &__header {
    flex: 0;
    display: flex;
    flex-flow: column;

    &__resume {
      color: #949494;
      font-size: 0.9em;
    }
  }

  &__table {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}

@media (min-width: 768px) {
  .operation-history {
    &__header {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
  }
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import { currency } from '../../utils/NumberFormatter';
import Table, {
  createColumnConfig,
  createColumnData,
} from '../../components/Table';
import OperationCell from '../../components/Table/CustomCells/OperationCell.vue';
import DateCell from '../../components/Table/CustomCells/DateCell.vue';
import CurrencyCell from '../../components/Table/CustomCells/CurrencyCell.vue';
import { MockedOperations } from '../../assets/MockedData';
import PositionManager from '../../app/PositionManager/PositionManager';
import CryptoManager from '../../app/CryptoManager/CryptoManager';

const position = computed(() =>
  PositionManager.getOrCreatePosition({
    symbol: CryptoManager.currentAsset.value,
  })
);
const averagePrice = computed(() => position.value.avgPrice);
const data = computed(() => createColumnData(position.value.operations));

const columns = computed(() =>
  createColumnConfig(data.value)
    .add({
      label: 'Operation',
      prop: 'side',
      component: OperationCell,
    })
    .add({
      label: 'Qtd',
      prop: 'qty',
    })
    .add({
      label: 'Data',
      prop: 'date',
      component: DateCell,
    })
    .add({
      label: 'Preço',
      prop: 'price',
      component: CurrencyCell,
    })
    .build()
);
</script>
