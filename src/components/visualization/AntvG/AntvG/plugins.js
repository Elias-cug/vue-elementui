import G6 from '@antv/g6'

export const createEdgeTip = () => {
  return new G6.Tooltip({
    offsetX: 10,
    offsetY: -40,
    itemTypes: ['edge'],
    getContent () {
      const outDiv = document.createElement('div')
      outDiv.setAttribute('class', 'topo-tooltip')
      outDiv.innerHTML = `<span>边tip</span>`
      return outDiv
    },
    shouldBegin () {
      return true
    }
  })
}

export const createNodeTip = () => {
  return new G6.Tooltip({
    offsetX: 10,
    offsetY: 10,
    itemTypes: ['node'],
    getContent: () => {
      const outDiv = document.createElement('div')
      outDiv.style.width = 'fit-content'
      outDiv.innerHTML = `<span>边tip</span>`
      return outDiv
    },
    shouldBegin () {
      return true
    }
  })
}
