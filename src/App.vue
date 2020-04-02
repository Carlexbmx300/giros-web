<template>
<div id="app">
 <router-view />
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d4d4d;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
