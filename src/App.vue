<script>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
import { store } from '../src/stores/store.js';


export default {
  components: {
    AppHeader,
    AppSidebar,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<template>
  <div>
    <AppSidebar />
  </div>
  <router-view></router-view>
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

.header {
  width: calc(100% - 101px);
  right: 0;
  position: fixed
}
</style>
