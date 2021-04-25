<template>
  <div class="topo">
    <div class="top">
      <el-button @click="getGlobalTopo">获取</el-button>
    </div>
    <div ref="globalTopo" class="container"></div>
  </div>
</template>

<script>
import AntvG from './AntvG/index'
import { get } from '@/utils/request.js'
import { getDomSize } from '@/utils/tools.js'
import { cloneDeep } from 'lodash'
export default {
  name: 'GlobalTopo',
  data () {
    return {
      graph: null
    }
  },
  methods: {
    /** 绘制全局拓扑 */
    paintTopo (topoData) {
      // 如果当前有画布存在，清除画布
      if (this.graph) {
        this.graph.destroy()
      }

      topoData = cloneDeep(topoData)
      const container = this.$refs['globalTopo']
      const { width, height } = getDomSize(container)
      const opts = {
        container,
        width,
        height
      }
      const graph = new AntvG(opts, 'global')

      // 存一份实例
      this.graph = graph

      graph.renderData(topoData)
    },

    /** 获取全局拓扑数据 */
    getGlobalTopo () {
      get('/api/getTopoData').then(res => {
        const topoData = res.data
        this.paintTopo(topoData)
      })
    }
  }
}
</script>

<style></style>
