<template>
  <div id="page">
    <div class="title header-font"><p id="p">ログイン画面</p></div>
    <div class="box-card">
      <div class="input-box header-font">
        <el-input v-model="input" placeholder="ユ—ザ—ID" class="input-text"/>
        <el-input v-model="inputpw" type="password" placeholder="******" class="input-password" />
      </div>
      <el-checkbox v-model="checked" class="checkbox-remember checkbox-font">ロクイン情報を保存する</el-checkbox>
      <div id="a"><div class="login-button button-font" @click="login">ログイン</div></div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/loginApi'
export default {
  data() {
    return {
      input: '',
      inputpw: '',
      checked: 'false'
    }
  },
  mounted() {
    var _this = this
    document.onkeydown = function(e) {
      var e = e || window.event
      if (event.keyCode === 13) {
        _this.login()
      }
    }
  },
  methods: {
    login() {
      if (!this.input) {
        this.$message({
          type: 'warning',
          message: 'ユーザーIDを入力してください。'
        })
      } else if (!this.inputpw) {
        this.$message({
          type: 'warning',
          message: 'パスワードを入力してください。'
        })
      } else {
        login(this.input, this.inputpw).then(response => {
          if (response.data.status === 0) {
            this.$router.push({ path: '/menu' })
          } else {
            this.$message({
              type: 'warning',
              message: 'ログインに失敗しました'
            })
          }
        }).catch(() => {
          this.$message({
            type: 'error',
            messgae: '処理失敗'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/login.css";
@import "../assets/css/font.css";
</style>
