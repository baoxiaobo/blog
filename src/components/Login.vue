<template>
  <div class="loginPage">
    <div class="login">
      <h1>Login</h1>
      <div>
        <input type="text" name="u" placeholder="用户名: admin" required="required" v-model="userName"/>
        <input type="password" name="p" placeholder="密码: admin" required="required" v-model="password"/>
        <button type="" class="btn-block" @click="loadFrom">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    loadFrom: function () {
      if (this.userName === 'admin' && this.password === 'admin') {
        this.$router.push('/homePage')
      } else {
        this.$alert('用户名和密码都为admin,点击确定设定正确的用户名和密码', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.userName = 'admin'
            this.password = 'admin'
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

.loginPage {
  width: 100%;
  height: 100%;
  background: #092756;
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
    h1 {
      color: #fff;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      letter-spacing: 1px;
      text-align: center;
    }
    input {
      width: 100%;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.3);
      border: none;
      outline: none;
      padding: 10px;
      font-size: 13px;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
        0 1px 1px rgba(255, 255, 255, 0.2);
      -webkit-transition: box-shadow 0.5s ease;
      -moz-transition: box-shadow 0.5s ease;
      -o-transition: box-shadow 0.5s ease;
      -ms-transition: box-shadow 0.5s ease;
      transition: box-shadow 0.5s ease;
    }
    input:focus {
      box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
        0 1px 1px rgba(255, 255, 255, 0.2);
    }
    .btn-block {
      width: 100%;
      height: 37px;
      border-radius: 4px;
      display: block;
      background: #4a77d4;
      border: 2px solid #4a77d4;
      color: #fff;
    }
  }
}
</style>
