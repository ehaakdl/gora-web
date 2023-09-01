<template>
  <ClientOnly>
    <div>
      <input
        type="button"
        value="increment"
        @click="store.increment()"
      >
      {{ store.count }}
      {{ store.doubleCount }}
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter';

let store;
if (process.client) {
  store = useCounterStore();
}

</script>

<style scoped></style>
