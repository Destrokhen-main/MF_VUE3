<template>
  <div class="footer">
    FOOTER {{ store.getters['getCount'] }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
.footer {
  padding: 10px 5px;
  border-top: 1px solid gainsboro;
}
</style>
