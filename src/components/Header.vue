<template>
  <header class="header">
    <h1 class="text-center">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>