<template>
  <form class="form">
    <div class="form-group">
      <label for="title">Write your task</label>
      <input type="text" class="form-control" id="title" placeholder="Title" v-model="note.title">
    </div>
    <div class="form-group">
      <label for="description">Write your task</label>
      <textarea type="text" class="form-control" id="description" placeholder="Description" rows="6" v-model="note.description"></textarea>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-default" v-on:click="addElement" >Add task</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'Form',
  data() {
    return {
      note: {
        title: "",
        description: ""
      }
    }
  },
  methods: {
    addElement() {
      this.$emit("addElement", this.note);
      this.note.title = "",
      this.note.description = ""
    }
  }
}

</script>