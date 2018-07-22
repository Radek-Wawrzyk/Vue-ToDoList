<template>
  <main>
    <div class="container">
      <Header></Header>
      <Form v-on:addElement="addNote"></Form>
      <ul class="list-group">
        <single-note v-for="note in notes" v-bind:note="note" v-bind:key="note.id"></single-note>
      </ul>
    </div>
  </main>
</template>

<script>

import Header from './Header.vue';
import Form from './Form.vue';
import SingleNote from './SingleNote.vue';
import { mapGetters } from "vuex";

export default {
  name: 'Notes',
  components: {
    Header,
    Form,
    SingleNote,
  },
  computed: {
    ...mapGetters(["notes"])
  },
  methods: {
    addNote: function(note) {
      this.$store.commit("addNote", note);
    },
  }
}


</script>