<template>
  <span>{{ currency(value) }}</span>
</template>

<script setup lang="ts">
import { currency } from '../../../utils/NumberFormatter';
defineProps<{ value: number }>();
</script>
