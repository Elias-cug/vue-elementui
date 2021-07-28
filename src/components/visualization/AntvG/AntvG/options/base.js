export default {
  renderer: 'canvas',
  minZoom: 0.1,
  maxZoom: 1.5,
  fitView: true,
  modes: { default: ['drag-canvas', 'zoom-canvas', 'drag-node'] },
  layout: {
    type: 'dagre',
    ranksep: 100,
    nodesep: 50,
    rankdir: 'LR'
  },
  defaultNode: {
    type: 'rate-node',
    size: 100,
    style: {
      opacity: 0,
      lineWidth: 2,
      stroke: '#FF5676'
    },
    labelCfg: {
      position: 'bottom'
    }
  },
  defaultEdge: {
    type: 'cubic-horizontal',
    style: {
      opacity: 1,
      lineWidth: 2,
      stroke: '#00D9FF'
    }
  }
}
