<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppSidebar.vue';
  import AppMain from './components/AppMain.vue';
  import AppSidebar from './components/AppFooter.vue';

  export default {
    components: {
      AppHeader,
      AppSidebar,
      AppMain,
      AppFooter
    },
  }
</script>

<template>

  <div class="position-relative">
    <div>
      <AppHeader />
    </div>
    <div>
      <AppSidebar />
    </div>
    <div>
      <AppMain />
    </div>

    <div>
      <AppFooter />
    </div>
  </div>

</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
