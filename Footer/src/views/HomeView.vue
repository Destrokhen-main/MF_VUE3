<template>
  <div class="home">
    FRONT END 2
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Footer: defineAsyncComponent(() => import('../components/FooterComponent.vue')),
  },
});
</script>
