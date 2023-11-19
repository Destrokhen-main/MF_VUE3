<template>
  <Header />
  <Layer>
    <router-view/>
  </Layer>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import Layer from './layer/LayerView.vue';

const Header = defineAsyncComponent(() => import('header/HeaderComponent.vue'));
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
