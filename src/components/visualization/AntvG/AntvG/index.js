import G6 from '@antv/g6'
import { registerNode } from './register-node.js'
import { registerEdge } from './register-edge.js'
import { merge } from 'lodash'
import baseOpts from './options/base.js'
import { createNodeTip, createEdgeTip } from './plugins'
import { getTheme } from './options/theme'

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

  /** 初始化实例:注册自定义边、注册自定义节点、 完成动态增加插件， 实例化画布， 添加事件 */
  init () {
    registerNode(G6)
    registerEdge(G6)

    // this.addPlugin()
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
    this.dataFilter(data)
    console.log('log: 拓扑图渲染数据为：', data)
    this.graph.data(data)
    this.graph.render()
    this.graph.fitView()
    const _this = this
    setImmediate(function () {
      _this.addZoomEvent(_this.graph)
    })
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
    this.graph.on('wheelzoom', () => {
      this.addZoomEvent(this.graph)
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

  /** zoom事件 */
  addZoomEvent (graph) {
    const zoom = graph.getZoom()
    let {
      edgeLineWidth,
      nodeLineWidth,
      edgeSelectedLineWidth,
      nodeSelectedLineWidth
    } = getTheme()
    if (zoom <= 1) {
      edgeSelectedLineWidth = edgeLineWidth / zoom + 1
      edgeLineWidth = edgeLineWidth / zoom

      nodeSelectedLineWidth = nodeLineWidth / zoom + 1
      nodeLineWidth = nodeLineWidth / zoom
    }

    graph.getEdges().forEach(edge => {
      const model = edge._cfg.model
      const stateStyles = edge._cfg.styles
      model.style.lineWidth = edgeLineWidth
      model.stateStyles = stateStyles
      model.stateStyles.highlight.lineWidth = edgeSelectedLineWidth
      edge.update(model)
    })

    graph.getNodes().forEach(node => {
      const model = node._cfg.model
      const stateStyles = node._cfg.styles
      model.style.lineWidth = nodeLineWidth
      model.stateStyles = stateStyles
      model.stateStyles.highlight.lineWidth = nodeSelectedLineWidth
      node.update(model)
    })
  }

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
    this.filterNodes(data.nodes)
    this.filterEdges(data.edges)
    this.filterCombos(data.combos)
    return data
  }

  /** 过滤节点 */
  filterNodes (nodes = []) {
    nodes.forEach(ele => {
      ele.imgType = ele.type
      ele.type = 'rate-node'

      let img = null
      try {
        img = require(`@/assets/img/topo/${ele.imgType}-${0}.svg`)
      } catch (error) {
        img = require(`@/assets/img/topo/unknow-${0}.svg`)
      }
      ele.icon = { show: true, height: 90, width: 90, img: img }
    })
    return nodes
  }

  /** 过滤边 */
  filterEdges (edges = []) {
    return edges
  }

  /** 过滤combo */

  filterCombos (combos = []) {
    return combos
  }
}

export default AntvG
