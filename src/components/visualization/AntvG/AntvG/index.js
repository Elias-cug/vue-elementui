import G6 from '@antv/g6'
import { cloneDeep, merge } from 'lodash'
import baseOpts from './options/base.js'
import { nodeTip, edgeTip } from './plugins'

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
    this.topo = null
    this.type = type
    this.options = this.mergeOpt(opts)
    this.plugins = []

    this.init()
  }

  /** 初始化实例: 完成动态增加插件， 实例化画布， 添加事件 */
  init () {
    this.addPlugin()
    this.topo = new G6.Graph({ ...this.options, plugins: this.plugins })

    this.addEvents()
  }

  /** 销毁画布 */
  destroy () {
    this.topo.destroy()
    this.topo = null
  }

  /** 切换主题:  */
  changeTheme () {}

  /** 添加事件：默认添加以下事件。 一般需要重写 */
  addEvents () {
    this.topo.on('node:mouseenter', evt => {
      this.addMouseenterNodeEvent(evt)
    })

    this.topo.on('node:mouseout', evt => {
      this.addMouseoutNodeEvent(evt)
    })

    this.topo.on('edge:mouseenter', evt => {
      this.addMouseenterEdgeEvent(evt)
    })

    this.topo.on('edge:mouseout', evt => {
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
        this.plugins.push(edgeTip)
        break
      }
      case 'trade': {
        this.plugins.push(nodeTip)
      }
    }
  }

  /** 合并配置 */
  mergeOpt (opt) {
    baseOpts = cloneDeep(baseOpts)
    const mergedOpt = merge(baseOpts, opt)
    return mergedOpt
  }
}

export default AntvG
