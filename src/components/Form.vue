<template>
  <form class="form">
    <div class="form-group" v-bind:class="{'has-error': error}">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" v-model="note.title">
    </div>
    <div class="form-group" v-bind:class="{'has-error': error}">
      <label for="description">Description</label>
      <textarea type="text" class="form-control" id="description" placeholder="Description" rows="6" v-model="note.description"></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-form" v-on:click="addElement" >Add task</button>
    </div>
    <small v-bind:class="{'error': error}" class="form-text text-danger">Please fill all fields!</small>
  </form>
</template>

<script>

export default {
  name: 'Form',
  data() {
    return {
      note: {
        title: "",
        description: "",
        time: ""
      },
      error: false
    }
  },
  methods: {
    addElement(event) {
      event.preventDefault();
      if (this.note.title && this.note.description) {
        this.$emit("addElement", this.note);
        this.note.title = "";
        this.note.description = "";
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
}

</script>

<style>

.form-text {
  display: none;
}
.error {
  display: block;
}
.btn-form {
  background: #f44033;
  color: white;
  transition: 0.25s all;
  font-size: 16px;
}
.btn-form:hover, .btn-form:focus {
  border-color: #f44033;
  background: white;
  color: #f44033;
  outline: none;
}
.has-error .form-control {
  border-color: #f44033;
}

</style>
