<template>
  <div class="header">
    <div class="logo">
      HEADER SITE (frontEnd 2)
    </div>

    <nav class="nav">
      <a @click="$router.push('/about')" @keypress.enter="$router.push('/about')" class="link">About</a>
      <a @click="$router.push('/')" @keypress.enter="$router.push('/about')" class="link">Main</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: space-evenly;
}

.logo {
  flex: 1
}

.nav {
  flex: 4;
  display: flex;
  gap: 10px
}

.link {
  cursor: pointer;
}
</style>
