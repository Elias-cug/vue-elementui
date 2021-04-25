<template>
  <div>
    <el-button @click="getGlobalTopo">获取</el-button>
    <div ref="globalTopo" class="global-topo"></div>
  </div>
</template>

<script>
import AntvG from '../AntvG/index'
import { get } from '@/utils/request.js'
import { getDomSize } from '@/utils/tools.js'
export default {
  name: 'GlobalTopo',
  data () {
    return {
      topo: null
    }
  },
  methods: {
    /** 绘制全局拓扑 */
    paintTopo () {
      const container = this.$refs['globalTopo']
      const { width, height } = getDomSize(container)
      const opts = {
        container,
        width,
        height
      }
      const topoInstance = new AntvG(opts, 'global')
      this.topo = topoInstance.topo

      console.log(topoInstance.options)
    },

    /** 获取全局拓扑数据 */
    getGlobalTopo () {
      get('/api/getTopoData').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style></style>
