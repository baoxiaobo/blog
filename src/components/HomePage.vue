<template>
  <div class="homePage">
    <el-container>
      <el-aside :width="asideWidth"><Nav /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import axios from 'axios'
axios.get('/api/personManagement').then(function (res) {
  console.log(res)
})
export default {
  data () {
    return {
      msg: '首页'
    }
  },
  components: {Nav, Header, Main},
  computed: {
    asideWidth () {
      return this.$store.state.isCollapse ? '70px' : '200px'
    }
  }
}
</script>

<style lang="scss" scoped>
.homePage {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background: #fff;
      color: #333;
      height: 45px!important;
    }

    .el-aside {
      text-align: center;
      line-height: 100%;
    }

    .el-main {
      color: #333;
      text-align: center;
      line-height: 80%;
    }

    .el-container {
      background: #ddd;
    }
  }
}
</style>
