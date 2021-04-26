<template>
  <div class="topo">
    <div class="top">
      <el-button @click="getTopoData">获取</el-button>
    </div>
    <div ref="topoContainer" class="container"></div>
  </div>
</template>

<script>
import AntvG from './AntvG/index'
import { get } from '@/utils/request.js'
import { getDomSize, debounce } from '@/utils/tools.js'
import { cloneDeep } from 'lodash'
export default {
  name: 'AntvG',
  data () {
    return {
      graph: null,
      fn: null
    }
  },
  mounted () {
    this.fn = debounce(this.onResize, 300)
    window.addEventListener('resize', this.fn)
  },
  destroyed () {
    window.removeEventListener('resize', this.fn)
  },
  methods: {
    /** 绘制全局拓扑 */
    paintTopo (topoData) {
      // 如果当前有画布存在，清除画布
      if (this.graph) {
        this.graph.destroy()
      }

      topoData = cloneDeep(topoData)
      const container = this.$refs['topoContainer']
      const { width, height } = getDomSize(container)
      const opts = {
        container,
        width,
        height
      }
      const graph = new AntvG(opts, 'global')

      // 存一份实例
      this.graph = graph
      console.log(this.graph.options)

      // 渲染数据
      graph.renderData(topoData)
    },

    /** 监听窗口改变事件 */
    onResize () {
      const container = this.$refs['topoContainer']
      const { width, height } = getDomSize(container)
      this.graph.changeSize(width, height)
    },

    /** 获取全局拓扑数据 */
    getTopoData () {
      get('/api/getTopoData').then(res => {
        const topoData = res.data
        this.paintTopo(topoData)
      })
    }
  }
}
</script>

<style></style>
