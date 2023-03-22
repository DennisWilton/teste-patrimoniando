<template>
  <div class="">
    <span>{{ dateAsString }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { fullDate, getTime } from '../../../utils/DateFormatter';

const props = defineProps<{
  date: Date;
}>();
const date = toRefs(props).date;

const dateAsString = computed(
  () => `${fullDate(date.value)} às ${getTime(date.value)}`
);
</script>
