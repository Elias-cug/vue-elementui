export default {
  renderer: 'canvas',
  minZoom: 0.1,
  maxZoom: 1.5,
  fitView: true,
  modes: { default: ['drag-canvas', 'zoom-canvas'] },
  layout: {
    type: 'dagre',
    ranksep: 100,
    nodesep: 50,
    rankdir: 'LR'
  },
  defaultNode: {
    size: 100,
    labelCfg: {
      position: 'bottom'
    }
  }
}
