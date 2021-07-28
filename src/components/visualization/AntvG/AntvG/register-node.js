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
        const rightRate = 3 / 4
        // 计算当前的进度对应的角度值
        const degrees = rightRate * 360
        // 计算当前角度对应的弧度值
        const rad = degrees * (Math.PI / 180)

        //极坐标转换成直角坐标
        const xEnd = (r * Math.sin(rad)).toFixed(2)
        const yEnd = (r * Math.cos(rad)).toFixed(2)
        group.addShape('path', {
          attrs: {
            path: ['M', 0, -r, 'A', r, r, 0, 0, 1, xEnd, yEnd].join(' '),
            stroke: 'red'
          },
          name: 'rate-node'
        })

        group.addShape('path', {
          attrs: {
            path: ['M', 0, -r, 'A', r, r, 0, 1, 0, xEnd, yEnd].join(' '),
            stroke: 'green'
          },
          name: 'rate-node'
        })
      },
      update: undefined
    },
    'circle'
  )
}
