<template>
  <form class="form">
    <div class="form-group">
      <label for="title">Write your task</label>
      <input type="text" class="form-control" id="title" placeholder="Title">
    </div>
    <div class="form-group">
      <label for="description">Write your task</label>
      <textarea type="text" class="form-control" id="description" placeholder="Description" rows="6"></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-default">Add task</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'Form'
}

</script>