<template>
  <Header />
  <Layer>
    <router-view/>
  </Layer>
  <Footer />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import Layer from './layer/LayerView.vue';
import Loader from './components/LoaderComponent.vue';
import Error from './components/ErrorComponent.vue';

const Header = defineAsyncComponent({
  loader: () => import('header/HeaderComponent.vue'),
  loadingComponent: Loader,
  errorComponent: Error,
  timeout: 3000,
});

const Footer = defineAsyncComponent({
  // eslint-disable-next-line import/no-unresolved
  loader: () => import('footer/FooterComponent.vue'),
  loadingComponent: Loader,
  errorComponent: Error,
  timeout: 3000,
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
}
</style>
