<template>
  <div>{{ side.slice(0, 1).toUpperCase() }}</div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup lang="ts">
defineProps<{
  side: any;
}>();
</script>
