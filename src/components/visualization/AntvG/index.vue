<template>
  <div>
    <div>g6可视化</div>
    <el-button @click="changeToGlobalTopo">全局拓扑</el-button>
    <component :is="which" />
  </div>
</template>

<script>
import GlobalTopo from './components/GlobalTopo'
export default {
  name: 'AntvG',
  components: { GlobalTopo },
  data () {
    return {
      which: GlobalTopo
    }
  },
  methods: {
    changeToGlobalTopo () {
      this.which = GlobalTopo
    }
  }
}
</script>

<style></style>
