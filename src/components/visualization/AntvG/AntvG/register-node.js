/**
 * 注册自定义节点
 */

export function registerNode (G6) {
  registerRateNode(G6)
}
// path: `M ${x}, ${y}
//   m -${r}, 0
//   a ${r},${r} 0 1,0 ${r * 2},0
//   a ${r},${r} 0 1,0 ${-r * 2},0`,
function registerRateNode (G6) {
  G6.registerNode(
    'rate-node',
    {
      afterDraw (cfg, group) {
        const r = 50
        const rightRate = 0.5
        // 计算当前的进度对应的角度值
        const degrees = rightRate * 360
        // 计算当前角度对应的弧度值
        const rad = degrees * (Math.PI / 180)

        // 画大弧还是小弧 0：小 1：大
        const rightLargeArcFlag = rightRate >= 0.5 ? 1 : 0

        const falseLargeArcFlag = rightRate < 0.5 ? 1 : 0

        // 顺时针还是逆时针 0：逆时针 1：顺时针
        // const sweepFlag = ''

        //极坐标转换成直角坐标
        const xEnd = (r * Math.sin(rad)).toFixed(2)
        const yEnd = -(r * Math.cos(rad)).toFixed(2)

        console.log('起点坐标是：')
        console.log(0, -r)
        console.log('终点坐标是：')
        console.log(xEnd, yEnd)

        const rightPath = `M 0 ${-r} A ${r} ${r} 0 ${rightLargeArcFlag} 1 ${xEnd} ${yEnd}`
        const falsePath = `M 0 ${-r} A ${r} ${r} 0 ${falseLargeArcFlag} 0 ${xEnd} ${yEnd}`

        group.addShape('path', {
          attrs: {
            path: rightPath,
            stroke: 'green'
          },
          name: 'rate-node'
        })

        group.addShape('path', {
          attrs: {
            path: falsePath,
            stroke: 'red'
          },
          name: 'rate-node'
        })
      },
      update: undefined
    },
    'circle'
  )
}
