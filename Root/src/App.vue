<template>
  <Header />
  <Layer>
    <router-view/>
  </Layer>
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
  suspensible: true,
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
