<template>
  <div class="content">
    <button @click="store.dispatch('minusOne')" class="btn" >-</button>
    <span class="count">{{ store.getters.getCount }}</span>
    <button @click="click" class="btn">+</button>
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

<style scoped>
.content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn {
  padding: 5px 10px;
  cursor: pointer;
}

.count {
  width: 30px;
  text-align: center;
}
</style>
