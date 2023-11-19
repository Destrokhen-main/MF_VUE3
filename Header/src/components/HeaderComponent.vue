<template>
  <div class="header">
    <div class="logo">
      HEADER SITE (frontEnd 2) <br />
      Эту переменную я отображаю из блока ниже {{count}}
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
  data: () => ({
    count: 0,
  }),
  created() {
    window.addEventListener('message', (e) => {
      if (e.data.type === 'ss') {
        this.count = e.data.value;
      }
    });
  },
};
</script>

<style scoped>
.header {
  padding: 10px 5px;
  display: flex;
  justify-content: space-evenly;

  border-bottom: 1px solid gainsboro;
}

.logo {
  flex: 1
}

.nav {
  flex: 2;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.link {
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}
</style>
