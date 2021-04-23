<template>
  <div>
    <span>首页</span>
    <el-button @click="jumpToVisPage">可视化</el-button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {}
  },
  methods: {
    jumpToVisPage () {
      this.$router.push('/visualization')
    }
  }
}
</script>

<style></style>
