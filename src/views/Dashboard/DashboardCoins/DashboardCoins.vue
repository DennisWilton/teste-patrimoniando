<template>
  <div class="dashboard__coins">
    <Coin :variant="1" />
    <Coin :variant="2" />
    <Coin :variant="3" />
    <Coin :variant="4" />
  </div>
</template>

<style lang="scss" scoped>
.dashboard__coins {
  pointer-events: none;
  display: none;
  grid-row: 1/2;
  grid-column: 1/2;
  color: #000;
  max-width: 1088px;
  width: 100%;
  height: 100%;
  place-items: center;
  /* pointer-events: none; */

  :deep(> svg) {
    width: 50px;
    height: 50px;
    grid-row: 1/2;
    grid-column: 1/2;

    image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .coin1 {
    align-self: end;
    justify-self: end;
    width: 150px;
    height: 150px;
    transform: translateX(30%) translateY(0%);
  }

  .coin2 {
    align-self: end;
    justify-self: start;
    width: 150px;
    height: 150px;
    transform: translateX(-30%) translateY(-30%);
  }

  .coin3 {
    align-self: end;
    justify-self: start;
    width: 250px;
    height: 150px;
    transform: translateX(-80%) translateY(-30%);
  }

  .coin4 {
    align-self: start;
    justify-self: start;
    width: 250px;
    height: 150px;
    transform: translateX(-50%) translateY(-30%);
  }
}
</style>

<script setup lang="ts">
import { Component } from 'vue';
import Coin from './Coin.vue';
</script>
