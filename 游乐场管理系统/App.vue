<template>
  <div id="app">
    <header>
      <h1>游乐园管理系统</h1>
      <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/visitors">游客管理</router-link> |
        <router-link to="/attractions">设施管理</router-link> |
        <router-link to="/tickets">票务管理</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  margin-bottom: 30px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>