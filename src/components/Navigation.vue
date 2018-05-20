<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" >{{title}}</router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/notes">Notes</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  props: ["title"]
}

</script>