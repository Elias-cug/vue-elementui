<template>
  <div>
    <el-button @click="jumpToVisPage">首页</el-button>
    <el-button @click="testPost">测试post</el-button>
    <el-button @click="testGet">测试get</el-button>
  </div>
</template>

<script>
import { get, post } from '@/utils/request.js'
export default {
  name: 'Main',
  data () {
    return {}
  },
  methods: {
    jumpToVisPage () {
      this.$router.push('/visualization')
    },
    testPost () {
      post('/api/getTopoData', { name: 'liyish' }).then(res => {
        console.log(res)
      })
    },
    testGet () {
      get('/api/getTopoData', { name: 'liyish' }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style></style>
