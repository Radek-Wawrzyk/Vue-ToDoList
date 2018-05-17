<template>
  <div id="app" class="container">
    <Header title="TodoApp"/>
    <Form/>
    <List/>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Form from './components/Form.vue';
import List from './components/List.vue';

export default {
  name: "app",
  components: {
    Header,
    Form,
    List
  },
  data() {
    return {
      title: "Todo app"
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
