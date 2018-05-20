<template>
  <main>
    <div class="container">
      <Header></Header>
      <Form v-on:addElement="addNote"></Form>
      <h2>Tasks</h2>
      <ul class="list-group">
        <single-note v-for="note in notes" v-bind:note="note" v-on:removeElement="removeNote" v-bind:key="note.id"></single-note>
      </ul>
    </div>
  </main>
</template>

<script>

import Header from './Header.vue';
import Form from './Form.vue';
import SingleNote from './SingleNote.vue';

export default {
  name: 'Notes',
  components: {
    Header,
    Form,
    SingleNote,
  },
  data() {
    return {
      notes: [],
      id: 1
    }
  },
  methods: {
    addNote(note) {
      this.notes.push({
        id: this.id,
        title: note.title,
        description: note.description,
        time: new Date(Date.now()).toLocaleString()
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