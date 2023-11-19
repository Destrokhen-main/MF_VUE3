<template>
  <div class="home">
    <Header />
    FRONT END 2
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header: defineAsyncComponent(() => import('../components/HeaderComponent.vue')),
  },
});
</script>
