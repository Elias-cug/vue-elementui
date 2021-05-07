import G6 from '@antv/g6'
import { cloneDeep, merge } from 'lodash'
import baseOpts from './options/base.js'
import { createNodeTip, createEdgeTip } from './plugins'

/**
 * @author liyish
 * @description 拓扑图基础类，实现动态配置，动态获取plugins，添加事件，销毁画布，主题切换
 * @class AntvG
 * @constructor
 * @param {Object} opts 不同的配置
 * @param {String} type 不同类型的拓扑 'global' / 'trade' / 'host'
 */
class AntvG {
  constructor (opts, type = 'global') {
    this.graph = null
    this.type = type
    this.options = this.mergeOpt(opts)
    this.plugins = []

    this.init()
  }

  /** 初始化实例: 完成动态增加插件， 实例化画布， 添加事件 */
  init () {
    this.addPlugin()
    this.graph = new G6.Graph({ ...this.options, plugins: this.plugins })

    this.addEvents()
  }

  /** 销毁画布 */
  destroy () {
    this.graph.destroy()
    this.graph = null
  }

  /** 渲染数据 */
  renderData (data) {
    this.graph.data(data)
    this.graph.render()
    this.graph.fitView()
  }

  /** 切换主题:  */
  changeTheme () {}

  /** 改变画布大小 */
  changeSize (width, height) {
    this.graph.changeSize(width, height)
    this.graph.fitView()
  }

  /** 添加事件：默认添加以下事件。 一般需要重写 */
  addEvents () {
    this.graph.on('node:mouseenter', evt => {
      this.addMouseenterNodeEvent(evt)
    })

    this.graph.on('node:mouseout', evt => {
      this.addMouseoutNodeEvent(evt)
    })

    this.graph.on('edge:mouseenter', evt => {
      this.addMouseenterEdgeEvent(evt)
    })

    this.graph.on('edge:mouseout', evt => {
      this.addMouseoutEdgeEvent(evt)
    })
  }

  /** 鼠标移入节点 */
  addMouseenterNodeEvent () {}

  /** 鼠标移出节点 */
  addMouseoutNodeEvent () {}

  /** 鼠标移入边 */
  addMouseenterEdgeEvent () {}

  /** 鼠标移出边 */
  addMouseoutEdgeEvent () {}

  /** 按类型动态增加插件 */
  addPlugin () {
    switch (this.type) {
      case 'global': {
        this.plugins.push(createEdgeTip())
        break
      }
      case 'trade': {
        this.plugins.push(createNodeTip())
      }
    }
  }

  /** 合并配置 */
  mergeOpt (opts) {
    const mergedOpt = merge(baseOpts, opts)
    return mergedOpt
  }

  /** 数据过滤 */
  dataFilter (data) {
    data = cloneDeep(data)
    data = {
      nodes: this.filterNodes(data.nodes),
      edges: this.filterEdges(data.edges),
      combos: this.filterCombos(data.combos)
    }
    return data
  }

  /** 过滤节点 */
  filterNodes (nodes = []) {
    nodes = cloneDeep(nodes)

    return nodes
  }

  /** 过滤边 */
  filterEdges (edges = []) {
    edges = cloneDeep(edges)

    return edges
  }

  /** 过滤combo */

  filterCombos (combos = []) {
    combos = cloneDeep(combos)

    return combos
  }
}

export default AntvG
