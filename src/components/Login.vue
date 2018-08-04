<template>
  <div class="login">
    <div id="title">
      <div class="iconfont icon-bokeyuan"></div>
      <div class="title-mes">
        <div>包大人的个人博客</div>
        <div>Mr. Bao's blog</div>
      </div>
    </div>
    <div id="form">
      <div class="user input"><label for="">用户名：</label><input type="text"></div>
      <div class="passWord input"><label for="">密码：</label><input type="text"></div>
      <div class="load input">登录</div>
      <div class="remak"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '包大人的个人博客'
    }
  }
}
</script>

<style lang="scss" scoped>
$form-width: 200px;
$form-height: 50px;
.login {
  height: 100%;
  width: 100%;
  background:url('../assets/imgs/background.jpg');
  background-size:100% 100%;
  -moz-background-size:100% 100%; /* 老版本的 Firefox */
  background-repeat:no-repeat;
  #title {
    position: absolute;
    width: 20rem;
    height: 5rem;
    margin-top: 50px;
    margin-left: 30px;
    display: flex;
    .icon-bokeyuan {
      padding-top: 6px;
    }
    .title-mes {
      margin-left: 10px;
      font-size: 1.7rem;
      color: #fff;
      div {
        text-align: left;
      }
    }
  }
  #form {
    position: absolute;
    width: $form-width;
    height: $form-height;
    margin-top: 12rem;
    margin-left: calc(50% - #{$form-width});
    .input {
      margin-top: 10px;
      width: 22rem;
      height: 3rem;
      border: 1px solid #fff;
      border-radius: 10px;
    }
  }
}
</style>
