<template>
  <li class="list-group-item">
    <h3>{{note.title}}</h3>
    <p>{{note.description}}</p>
    <button class="btn btn-danger" v-on:click="removeElement">Delete</button>
  </li>
</template>

<script>

export default {
  name: 'List',
  props: ["note"],
  methods: {
    removeElement() {
      this.$emit("removeElement", this.note.id);
    }
  }
}

</script>