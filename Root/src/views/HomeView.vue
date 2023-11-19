<template>
  <div class="content">
    front end - 1
    <div>
      <button @click="count -= 1">-</button>
      <span>{{ count }}</span>
      <button @click="count += 1">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    count: 10,
  }),
  created() {
    window.postMessage({ type: 'ss', value: this.count });
  },
  watch: {
    count(n) {
      window.postMessage({ type: 'ss', value: n });
    },
  },
});
</script>
