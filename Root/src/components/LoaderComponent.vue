<template>
  <div class="loader">Загрузка</div>
</template>

<style scoped>

.loader {
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-duration: 3s;

  padding: 10px;
  text-align: center;
}

@keyframes slidein {
  0%, 100% {
    background: grey;
  }
  50% {
    background: rgb(226, 226, 226);
  }
}
</style>
