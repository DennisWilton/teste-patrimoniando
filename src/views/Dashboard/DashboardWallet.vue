<template>
  <div class="dashboard-wallet">
    <div class="dashboard-wallet__position">
      <div class="dashboard-wallet__position__title">Sua carteira</div>
      <div class="dashboard-wallet__position__value">
        <span
          ><span class="symbol">{{ currentSymbol }}</span
          ><span class="value">{{ floorTo(cryptoPosition.qty, 5) }}</span></span
        >
        <div
          class="dashboard-wallet__position__edit"
          @click="updateRandomPosition"
        >
          <Pencil />
        </div>
      </div>
    </div>
    <div class="dashboard-wallet__current-balance">
      <div
        class="dashboard-wallet__current-balance__gainLoss"
        :class="getGainLossVariationColor(gainLoss)"
      >
        {{ [gainLoss > 0 ? '+' : '-', currency(Math.abs(gainLoss))].join('') }}
      </div>
      <div class="dashboard-wallet__current-balance__value">
        <span>{{ currency(currentBalance) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-wallet {
  display: flex;
  justify-content: space-between;
  line-height: 100%;
  align-items: center;
  user-select: none;

  &__position {
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-flow: column;

    &__title {
      font-size: 1rem;
    }

    &__value {
      display: flex;
      font-size: 2rem;
      font-weight: 500;
      align-items: center;
      gap: 2px;

      & > span {
        display: flex;
        gap: 3px;
      }
    }

    &__edit {
      cursor: pointer;

      &:active {
        transform: translateY(1px);
      }
    }
  }

  &__current-balance {
    display: flex;
    flex-flow: column;
    gap: 5px;
    align-items: end;
    &__gainLoss {
      font-size: 1rem;
      color: #7bd765;

      &--positive {
        color: #7bd765;
      }

      &--negative {
        color: #ff4d4f;
      }
    }
    &__value {
      font-size: 2rem;
      font-weight: 600;
      color: #000;
    }
  }
}
</style>

<script setup lang="ts">
import CryptoManager from '../../app/CryptoManager/CryptoManager';
import PositionManager from '../../app/PositionManager/PositionManager';
import Pencil from '../../icons/Pencil.vue';
import { currency } from '../../utils/NumberFormatter';
import { computed } from 'vue';
import RateManager from '../../app/RateManager/RateManager';
import { Position } from '../../app/PositionManager/Position';
import { floorTo } from '../../utils/NumberUtils';

const currentSymbol = computed(() => CryptoManager.currentAsset.value);
const cryptoPosition = computed(() =>
  PositionManager.getOrCreatePosition({
    symbol: currentSymbol.value,
  })
);

function updateRandomPosition() {
  const numOps = Math.floor(Math.random() * 30) + 15;
  const randomFakePosition = PositionManager.createFakePosition({
    numOperations: numOps,
    symbol: currentSymbol.value,
  });

  PositionManager.updatePosition({
    symbol: currentSymbol.value,
    position: randomFakePosition,
  });
}
const currentBalance = computed(
  () =>
    cryptoPosition.value.qty *
    RateManager.convert(
      'BRL',
      CryptoManager.getAssetInfoForCurrentAsset()?.priceUsd ?? 0
    )
);
const gainLoss = computed(
  () =>
    currentBalance.value -
    cryptoPosition.value.avgPrice * cryptoPosition.value.qty
);

function getGainLossVariationColor(gainLoss: number) {
  return gainLoss > 0
    ? 'dashboard-wallet__current-balance__gainLoss--positive'
    : 'dashboard-wallet__current-balance__gainLoss--negative';
}
</script>
