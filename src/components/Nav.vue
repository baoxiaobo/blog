<template>
  <div class="nav">
    <el-menu default-active="/homePage/main" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
      <el-submenu index="homePage">
          <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">学习相关</span>
          </template>
          <el-menu-item index="/homePage/main">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">
          <i class="el-icon-service"></i>
          <span slot="title">个人生活</span>
          </template>
          <el-menu-item index="/homePage/resume">个人简历</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'nav'
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleClick: function () {
      console.log('aaaaaaa')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
#app .nav {
  background: rgb(84, 92, 100);
  height: 100%;
  ul {
    border: 0;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
