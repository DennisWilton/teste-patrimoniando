<template>
  <div class="dashboard">
    <div class="dashboard__container">
      <div class="dashboard__outbox">
        <div class="dashboard__news">
          <div class="dashboard__news__time">11:48</div>
          <div class="dashboard__news__title">
            BTC atinge marca histórica: entenda o impacto na economia global
          </div>
          <div class="dashboard__news__author">Binance Brasil</div>
        </div>
        <div class="dashboard__outbox__settings">
          <GearIcon />
        </div>
      </div>

      <div class="dashboard__content">
        <div class="dashboard__content__header">
          <div class="dashboard__content__profile">
            <DashboardProfile />
          </div>
          <div class="dashboard__content__settings">
            <button>Configurações</button>
          </div>
        </div>

        <TriangleDivider />

        <div class="dashboard__crypto-selector">
          <CryptoSelector />
        </div>

        <div class="dashboard__content__sub-content">
          <div class="dashboard__wallet">
            <DashboardWallet />
          </div>

          <div class="dashboard__asset-info">
            <DashboardAssetInfo />
          </div>

          <div class="dashboard__operation__history">
            <DashboardOperationHistory />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardProfile from './DashboardProfile.vue';
import GearIcon from '../../icons/Gear.vue';
import TriangleDivider from '../../components/TriangleDivider';
import CryptoSelector from '../../components/CryptoSelector';
import DashboardWallet from './DashboardWallet.vue';
import DashboardAssetInfo from './DashboardAssetInfo.vue';
import DashboardOperationHistory from './DashboardOperationHistory.vue';
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 100%;
  background: #eeeeee;
  display: grid;
  place-items: center;
  padding: 60px 0;

  &__container {
    background: #fafafa;
    width: 100%;
    height: 100%;
    max-width: 1088px;
    display: grid;
    grid-template-rows: 20px 1fr;
    color: #000;
    box-shadow: 0px 5px 10px #0001;
  }

  &__outbox {
    transform: translateY(-50%);
    height: min-content;
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 1.5rem;
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
    height: 40px;

    &__settings {
      display: grid;
      place-items: center;
    }
  }

  &__news {
    background: #222;
    color: white;
    display: grid;
    grid-template-columns: auto 1fr auto;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    padding: 0px 20px;
    border-radius: 20px;
    user-select: none;

    &:hover {
      background: #111;
    }

    &__time {
      font-weight: bold;
    }

    &__title {
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: all;
    }

    &__author {
      font-weight: bold;
    }
  }

  &__content {
    padding: 1rem 2rem;

    &__header {
      color: #000;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      justify-content: space-between;
    }

    &__settings {
      display: none;

      & > button {
        margin: 0;
        border: none;
        color: #000;
        padding: 10px;
        display: flex;
        background: transparent;
        align-items: center;
        line-height: 100%;
        border-radius: 10px;
        cursor: pointer;
        user-select: none;

        &:hover {
          background: #fff;
        }

        &:active {
          background: #efefef;
        }

        /* hide outline */
        &:focus {
          outline: none;
        }
      }
    }

    &__sub-content {
      display: flex;
      flex-flow: column;
      gap: 40px;
    }
  }

  &__crypto-selector {
    display: flex;
    justify-content: center;
    transform: translateY(-25%);
  }

  &__operation__history {
    height: 200px;
    overflow: hidden;
  }
}

@media (min-width: 768px) {
  .dashboard {
    padding: 60px;
    &__outbox {
      grid-template-columns: 1fr;

      &__settings {
        display: none;
      }
    }

    &__container {
      border-radius: 20px;
    }

    &__content {
      &__header {
        grid-template-columns: 1fr 1fr;
      }
      &__settings {
        display: flex;
        align-items: center;
        justify-content: end;
      }
    }
  }
}
</style>
