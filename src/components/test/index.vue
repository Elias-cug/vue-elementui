<template>
  <div class="test-iframe">
    <el-button @click="setCookie">设置cookie</el-button>
    <el-button @click="getCookie">获取cookie</el-button>
    <el-button @click="cleanCookie">清除cookie</el-button>
    <span>{{ 'id' + id }}</span>
    <span>{{ 'name' + name }}</span>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: 'Test',
  components: {},
  data () {
    return {
      id: '',
      name: ''
    }
  },
  methods: {
    setCookie () {
      cookie.set('id', '0111111')
      cookie.set('name', 'name')
    },
    getCookie () {
      this.id = cookie.get('id')
      this.name = cookie.get('name')
    },
    cleanCookie () {
      this.id = ''
      this.name = ''
      cookie.remove(this.id)
      cookie.remove(this.name)
    }
  }
}
</script>

<style></style>
