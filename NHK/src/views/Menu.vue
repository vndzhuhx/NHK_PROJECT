<template>
  <div id="page">
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <div class="header">
      <p id="p" class="header-font">メニユー画面</p>
      <p id="username" class="header-font">NHK太郎</p>
    </div>
    <div class="box-card">
      <div class="replace  button-font" @click="onsubstitution">代案一覧·生成</div>
      <div class="manage button-font" @click="onfan">措置番組管理</div>
    </div>
  </div>
</template>

<script>
import { substitution, fan } from '@/api/menuApi'
export default {
  methods: {
    onsubstitution() {
      substitution().then(response => {
        this.$router.push({
          name: 'replace_show',
          params: {
            subData: response.data
          }
        })
      })
    },
    onfan() {
      fan().then(response => {
        this.$router.push({
          name: 'program_manage',
          params: {
            fanData: response.data
          }
        })
      })
    }
  }
}
</script>

<style scoped>

@import "../assets/css/font.css";
@import  "../assets/css/menu.css";

</style>
