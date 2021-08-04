import { getTheme } from './theme'
const { nodeColor, edgeColor } = getTheme()
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
      stroke: nodeColor
    },
    labelCfg: {
      position: 'bottom',
      offset: 12,
      style: {
        fontSize: 20
      }
    }
  },
  defaultEdge: {
    type: 'cubic-horizontal',
    style: {
      opacity: 1,
      lineWidth: 2,
      stroke: edgeColor
    }
  }
}
