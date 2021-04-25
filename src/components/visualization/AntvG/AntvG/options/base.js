export default {
  renderer: 'canvas',
  minZoom: 0.1,
  maxZoom: 1.5,
  modes: { default: ['drag-canvas', 'zoom-canvas'] },
  layout: {
    type: 'dagre',
    ranksep: 150,
    nodesep: 20,
    rankdir: 'LR'
  }
}
