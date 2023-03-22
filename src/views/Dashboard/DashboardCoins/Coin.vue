<template>
  <div :class="`coin coin${variant}`">
    <div ref="movementEl" class="coin_movement">
      <component :is="getVariant(variant)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coin_movement {
  width: 100%;
  height: 100%;
}
.coin {
  grid-row: 1/2;
  grid-column: 1/2;
  :deep(svg) {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Coin1 from '../../../resources/images/Coin1.svg';
import Coin2 from '../../../resources/images/Coin2.svg';
import Coin3 from '../../../resources/images/Coin3.svg';
import Coin4 from '../../../resources/images/Coin4.svg';
defineProps<{ variant: number }>();

function getVariant(variant: number) {
  switch (variant) {
    case 1:
      return Coin1;
    case 2:
      return Coin2;
    case 3:
      return Coin3;
    case 4:
      return Coin4;
  }
}

const movementEl = ref<HTMLDivElement>();

function floatElement(movementEl: HTMLElement) {
  if (movementEl) {
    const { width, height } = movementEl.getBoundingClientRect();
    const x = Math.random() * 0;
    const y = Math.random() * height;
    const amplitude = 5; // Altere este valor para ajustar a amplitude da flutuação
    const period = Math.random() * 5000 + 2000; // Altere este valor para ajustar a velocidade da flutuação

    const startTime = performance.now();

    function updatePosition(timestamp: number) {
      const elapsedTime = timestamp - startTime;
      const floatY = Math.sin((elapsedTime / period) * 2 * Math.PI) * amplitude;

      movementEl.style.transform = `translate(${x}px, ${y + floatY}px)`;

      requestAnimationFrame(updatePosition);
    }

    requestAnimationFrame(updatePosition);
  }
}

onMounted(() => {
  floatElement(movementEl.value!);
});
</script>
