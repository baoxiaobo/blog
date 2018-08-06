<template>
  <div class="homePage">
    <el-container>
      <el-aside width="200px"><Nav /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
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
  components: {Nav, Header, Main, Footer}
}
</script>

<style lang="scss" scoped>
.homePage {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      color: #333;
      background-color: #b3c0d1;
    }

    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      line-height: 10%;
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 100%;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 80%;
    }
  }
}
</style>
