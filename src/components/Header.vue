<template>
  <header class="header">
    <h1 class="text-center">{{titleHeader}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titleHeader: String
  }
}
</script>