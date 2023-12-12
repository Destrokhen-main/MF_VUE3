<template>
  <div class="content">
    front end - 1
    <div>
      <span>{{ store.getters.getCount }}</span>
      <button @click="click">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const click = () => store.dispatch('addOne');

    return {
      click,
      store,
    };
  },
});
</script>
