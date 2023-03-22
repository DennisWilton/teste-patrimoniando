<template>
  <div class="dashboard-asset-info">
    <div class="dashboard-asset-info__current-price">
      <div class="dashboard-asset-info__current-price__title">Preço atual</div>
      <div class="dashboard-asset-info__current-price__value">
        <span>1 BTC : {{ currency(currentAssetQuoteConverted) }}</span>
      </div>
    </div>
    <div class="dashboard-asset-info__variation">
      <div class="dashboard-asset-info__variation__title">Variação</div>
      <div
        class="dashboard-asset-info__variation__value"
        :class="variationClass"
      >
        <span>{{ variationDisplay }}%</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-asset-info {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  line-height: 100%;
  user-select: none;
  gap: 40px;

  &__current-price {
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

  &__variation {
    display: flex;
    flex-flow: column;
    gap: 5px;
    align-items: start;

    &__gainLoss {
      font-size: 1rem;
      color: #7bd765;
    }
    &__value {
      font-size: 2rem;
      font-weight: 600;
      color: #000;

      &--positive {
        color: #7bd765;
      }

      &--negative {
        color: #ff4d4f;
      }
    }
  }
}

@media (min-width: 768px) {
  .dashboard-asset-info {
    display: flex;
    flex-flow: row;

    &__variation {
      align-items: end;
    }
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import CryptoManager from '../../app/CryptoManager/CryptoManager';
import PositionManager from '../../app/PositionManager/PositionManager';
import RateManager from '../../app/RateManager/RateManager';
import Pencil from '../../icons/Pencil.vue';
import { currency } from '../../utils/NumberFormatter';

const currentAsset = computed(() =>
  CryptoManager.getAssetInfoForCurrentAsset()
);
const currentAssetQuoteConverted = computed(() =>
  RateManager.convert('BRL', currentAsset.value?.priceUsd ?? 0)
);

const avgPrice = computed(() => {
  if (!currentAsset.value) {
    return 0;
  }

  return PositionManager.getOrCreatePosition(currentAsset.value).avgPrice;
});

const variation = computed(
  () =>
    ((currentAssetQuoteConverted.value - avgPrice.value) / avgPrice.value ||
      1) * 100
);

const variationDisplay = computed(() =>
  [variation.value > 0 ? '+' : '-', Math.abs(variation.value).toFixed(2)].join(
    ''
  )
);

const variationClass = computed(() => {
  return {
    'dashboard-asset-info__variation__value--positive': variation.value > 0,
    'dashboard-asset-info__variation__value--negative': variation.value < 0,
  };
});
</script>
