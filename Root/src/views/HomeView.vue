<template>
  <div class="content">
    front end - 1
    <div>
      <span>{{ count }}</span>
      <button @click="click">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    count(vm: any) {
      return vm.$store.state.count;
    },
  },
  methods: {
    click() {
      (this as any).$store.dispatch('addOne');
    },
  },
});
</script>
