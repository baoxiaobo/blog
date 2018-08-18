<template>
  <div class="header">
    <div class="el-icon-tickets" @click="changeNav"></div>
    <div id="contain">
      <div class="user"></div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
           Administrator <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item ><i class="el-icon-info"></i>个人信息</el-dropdown-item>
          <el-dropdown-item ><i class="el-icon-circle-close"></i>注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'header'
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    changeNav: function () {
      console.log('xx')
      this.$store.commit('isCollapse')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  .header {
    margin-top: 4px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-icon-tickets {
      width: 35px;
      line-height: 30px;
      background: #1ab394;
    }
    .el-icon-tickets::before {
      color: white;
    }
    #contain {
      display: flex;
      flex-direction: row;
      width: 170px;
      .user {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-image: url('../../static/imgs/admin.png');
        background-size: 30px 30px;
        background-repeat: no-repeat;
      }
      .el-dropdown {
        margin-left: 10px;
        width: 120px;
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
