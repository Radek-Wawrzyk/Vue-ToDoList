<template>
  <div id="app">
    <Navigation v-bind:title="title" ></Navigation>
    <transition name="fade-up">
      <router-view></router-view>
    </transition>
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
main {
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
}
.fade-up-enter-active, .fade-up-leave-active {
  transition: all 0.25s ease-out;
}
.fade-up-enter {
  opacity: 0;
  transform: translate3d(0,50px,0);
}
.fade-up-leave-to {
  opacity: 0;
}
@media screen and (max-width: 768px){
  main {
    top: 160px;
  }
}


</style>
