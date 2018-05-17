<template>
  <div id="app" class="container">
    <Header titleHeader="TodoApp"/>
    <Form v-on:addElement="addNote"></Form>
    <h2>Tasks</h2>
    <ul class="list-group">
      <List v-for="note in notes" v-bind:note="note" v-on:removeElement="removeNote" v-bind:key="note.id"></List>
    </ul>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Form from './components/Form.vue';
import List from './components/SingleNote.vue';

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
      notes: [
        {id: 0, title: "Pranie", description: "Wypierz te pranie"}
      ],
      id: 1
    }
  },
  methods: {
    addNote(note) {
      this.notes.push({
        id: this.id,
        title: note.title,
        description: note.description
      });
      this.id++;
    },
    removeNote(id) {
      let notes = this.notes;
      this.notes = notes.filter((note => note.id != id));
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
  margin-top: 60px;
}
</style>
