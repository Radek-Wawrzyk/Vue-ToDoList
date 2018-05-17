<template>
  <div id="app" class="container">
    <Header titleHeader="TodoApp"/>
    <Form v-on:addElement="addNote"></Form>
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
      titleHeader: "Todo app",
      todos: [
        {id: 0, title: "Pranie", description: "Wypierz te pranie"}
      ],
      id: 1
    }
  },
  methods: {
    addNote(note) {
      this.todos.push({
        id: this.id,
        title: note.title,
        description: note.description
      });
      this.id++;
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
