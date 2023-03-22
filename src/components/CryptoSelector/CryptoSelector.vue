<template>
  <div class="wrapper">
    <div class="back" @click="back" v-html="arrowLeftIcon"></div>
    <div @click="next" class="crypto-selector">
      <div class="icon" v-html="currentAsset.icon"></div>
      <div class="name">{{ currentAsset.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}
.back {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  border-radius: 10px;
  background: #ededed;
  width: 30px;
  padding-right: 2px;
  text-align: center;
  color: #000;
  cursor: pointer;
  user-select: none;
  align-items: center;
  place-items: center;

  :deep(svg) {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background: #ddd;
  }
  &:active {
    background: #ccc;
  }
}
.crypto-selector {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding: 3px 10px;
  border-radius: 10px;
  background: #eee;
  width: fit-content;
  color: #000;
  cursor: pointer;
  user-select: none;
  align-items: center;

  .icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :deep(svg) {
      width: 80%;
      height: 80%;
    }
  }

  &:hover {
    background: #ddd;
  }
  &:active {
    background: #ccc;
  }
}
</style>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import CryptoManager from '../../app/CryptoManager/CryptoManager';
import AssetIcons from '../../assets/Assets';

const availableAssets = computed(() => [...CryptoManager.assetInfoMap.keys()]);

const selectedSymbol = computed({
  get() {
    return CryptoManager.currentAsset.value;
  },
  set(value: string) {
    CryptoManager.currentAsset.value = value;
  },
});

const currentAsset = computed(() => {
  const asset = AssetIcons[selectedSymbol.value];
  if (!asset) {
    return {
      name:
        CryptoManager.getAssetInfo(selectedSymbol.value)?.name ??
        'Desconhecido',
      symbol: CryptoManager.getAssetInfo(selectedSymbol.value)?.symbol,
      icon: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.7 51.7"><title>Crypto Logos Logo</title><path d="M317.78,373.93a25.84,25.84,0,1,1-34.86,11,25.85,25.85,0,0,1,34.86-11h0Z" transform="translate(-280 -371)" style="fill: rgb(255, 153, 51); fill-rule: evenodd;"></path><path d="M315.86,406a13.68,13.68,0,0,1-7.7,4.2l-1.2,5.41-3.5-.78,1-4.51a13.63,13.63,0,0,1-3.52-.85l-1,4.57-3.5-.78,1.24-5.61A13.59,13.59,0,0,1,303,383.56l1.24-5.61,3.5,0.78-1,4.57a13.62,13.62,0,0,1,3.55.72l1-4.51,3.5,0.78-1.2,5.41a13.54,13.54,0,0,1,3.7,3.86,12.94,12.94,0,0,1,1.51,3.21l-5.63,1.78a8.46,8.46,0,0,0-.84-1.83A7.7,7.7,0,1,0,310,403.35a8.22,8.22,0,0,0,1.54-1.3l4.34,4h0Z" transform="translate(-280 -371)" style="fill: rgb(255, 255, 255);"></path></svg>',
    };
  }
  return asset;
});

function next() {
  const currentIndex = availableAssets.value.indexOf(selectedSymbol.value);
  if (currentIndex < availableAssets.value.length - 1) {
    selectedSymbol.value = availableAssets.value[currentIndex + 1];
    return;
  }
  selectedSymbol.value = availableAssets.value[0];
}

function back() {
  const currentIndex = availableAssets.value.indexOf(selectedSymbol.value);
  if (currentIndex === 0) {
    selectedSymbol.value =
      availableAssets.value[availableAssets.value.length - 1];
    return;
  }
  selectedSymbol.value = availableAssets.value[currentIndex - 1];
}

const arrowLeftIcon = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>`;
</script>
