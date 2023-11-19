<template>
  <div class="container">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  width: 90%;
}

@media screen and (max-width:1000px) {
  .wrapper {
    width: 100%;
  }
}
</style>
