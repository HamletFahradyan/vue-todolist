<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to='/'>Home</router-link></li>
        <li><router-link to='/list'>List</router-link></li>
        <li><router-link to='/list/deleted'>Deleted List</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
