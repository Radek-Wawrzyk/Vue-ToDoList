<template>
  <div id="app">
    <Navigation v-bind:title="title" ></Navigation>
    <main class="container">
      <router-view>
    
      </router-view>
    </main>
  </div>
</template>

<script>

import Navigation from './components/Navigation';

export default {
  name: "app",
  components: {
    Navigation
  },
  data() {
    return {
      title: "Vue ToDo App"
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
