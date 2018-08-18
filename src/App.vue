<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-dropdown-menu {
  border: 1px solid #999;
  border-radius: 0;
  .popper__arrow {
    display: none
  }
  li {
    i::before {
      margin-right: 10px;
    }
  }
}

</style>
