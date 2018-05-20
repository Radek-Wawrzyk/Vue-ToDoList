<template>
  <transition name="fade">
    <li class="list-group-item" v-bind:class="{active: done}">
      <h3>{{note.title}}</h3>
      <p>{{note.description}}</p>
      <p class="text-muted small">{{note.time}}</p>
      <input type="checkbox" v-model="done" v-on:click="doneTask">
      <div class="btn-group">
        <button class="btn btn-danger" v-on:click="removeElement">Delete</button>
        <button class="btn btn-warning" v-on:click="editElement">Edit</button>
      </div>
      <div class="edit-form" v-bind:class="{'active': status}">
        <div class="form-group">
          <label :for="'title-edit-'+note.id" >Title</label>
          <input type="text" class="form-control" id="title-edit" v-model="note.title" >
        </div>
        <div class="form-group">
          <label :for="'description-edit-'+note.id" >Description</label>
          <textarea type="text" class="form-control" :id="'description-edit-'+note.id" v-model="note.description"></textarea>
        </div>
      </div>
    </li>
  </transition>
</template>

<script>

export default {
  name: 'SingleNote',
  props: ["note"],
  data() {
    return {
      status: false,
      done: false,
    }
  },
  methods: {
    removeElement() {
      this.$emit("removeElement", this.note.id);
    },
    editElement() {
      this.status = !this.status;
    },
    doneTask() {
      this.done = !this.done;
    }
  }
}

</script>

<style>

.edit-form {
  display: none;
  padding: 10px 0;
}
.edit-form.active {
  display: block;
}
input[type=checkbox] {
  margin: 0 10px 0 0;
}
.btn-group .btn {
  margin: 5px 20px;
}
.list-group-item {
  border-width: 3px;
  margin: 0 0 10px 0;
  transition: border 0.25s;
}
.list-group-item.active p, .list-group-item.active h3  {
  text-decoration: line-through;
}
.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
  border-color: #38af38;
  background: inherit;
  color: inherit;
  border-width: 3px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.25s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: translate3d(-100px,0,0);
}
.fade-leave-to {
  opacity: 0;
  transform: translate3d(100px,0,0);
}


</style>
