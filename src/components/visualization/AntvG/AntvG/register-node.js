/**
 * 注册自定义节点
 */
import { getTheme } from './options/theme'
const { nodeRightColor, nodeErrorColor } = getTheme()
export function registerNode (G6) {
  registerRateNode(G6)
}

/**
 * 注册一个节点：实现按照比率展示圆环的颜色
 * @param {*} G6
 */
function registerRateNode (G6) {
  G6.registerNode(
    'rate-node',
    {
      afterDraw (cfg, group) {
        // 配置
        const lineWidth = 3
        const rightColor = nodeRightColor
        const errorColor = nodeErrorColor

        const r = 50
        const rightRate = 0.5
        // 计算当前的进度对应的角度值
        const degrees = rightRate * 360
        // 计算当前角度对应的弧度值
        const rad = degrees * (Math.PI / 180)

        // 画大弧还是小弧 0：小 1：大
        const rightLargeArcFlag = rightRate >= 0.5 ? 1 : 0
        const errorLargeArcFlag = rightRate < 0.5 ? 1 : 0

        //极坐标转换成直角坐标
        const xEnd = (r * Math.sin(rad)).toFixed(2)
        const yEnd = -(r * Math.cos(rad)).toFixed(2)

        // 正确的路径
        const rightPath = `M 0 ${-r} A ${r} ${r} 0 ${rightLargeArcFlag} 1 ${xEnd} ${yEnd}`
        // 错误的路径
        const errorPath = `M 0 ${-r} A ${r} ${r} 0 ${errorLargeArcFlag} 0 ${xEnd} ${yEnd}`

        group.addShape('path', {
          attrs: {
            path: rightPath,
            stroke: rightColor,
            lineWidth: lineWidth
          },
          name: 'rate-node'
        })

        group.addShape('path', {
          attrs: {
            path: errorPath,
            stroke: errorColor,
            lineWidth: lineWidth
          },
          name: 'rate-node'
        })
      }
      // update: undefined
    },
    'circle'
  )
}
