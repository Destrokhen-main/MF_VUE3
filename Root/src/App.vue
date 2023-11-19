<template>
  <Header />
  <router-view/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Header: defineAsyncComponent(() => import('header/HeaderComponent.vue')),
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
