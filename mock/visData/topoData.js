const topoArtif = {
  nodes: [
    {
      id: 'N01',
      label: 'BROWSER',
      type: 'Browser',
      nodeType: 'DEM',
      errorRate: 0.3
    },
    {
      id: 'N02',
      label: 'Cloud',
      type: 'Cloud',
      nodeType: 'CLOUD',
      errorRate: 0.1
    },
    {
      id: 'N03',
      label: 'Switch',
      type: 'Switch',
      nodeType: 'SWITCH',
      errorRate: 1
    },
    {
      id: 'N04',
      label: 'Web',
      type: 'Service',
      nodeType: 'APM',
      errorRate: 0
    },
    {
      id: 'N05',
      label: 'LB',
      type: 'LB',
      nodeType: 'LB'
    },
    {
      id: 'N06',
      label: 'Service-auth',
      type: 'Service',
      nodeType: 'APM'
    },
    {
      id: 'N07',
      label: 'Service-order',
      type: 'Service',
      nodeType: 'APM'
    },
    {
      id: 'N08',
      label: 'DB',
      type: 'DB',
      nodeType: 'APM'
    }
  ],
  edges: [
    {
      id: 'N01-N02',
      source: 'N01',
      target: 'N02'
    },
    {
      id: 'N02-N03',
      source: 'N02',
      target: 'N03'
    },
    {
      id: 'N03-N04',
      source: 'N03',
      target: 'N04'
    },
    {
      id: 'N04-N05',
      source: 'N04',
      target: 'N05'
    },
    {
      id: 'N05-N06',
      source: 'N05',
      target: 'N06'
    },
    {
      id: 'N05-N07',
      source: 'N05',
      target: 'N07'
    },
    {
      id: 'N07-N08',
      source: 'N07',
      target: 'N08'
    }
  ]
}

export const mockTopoData = {
  url: '/api/getTopoData',
  method: 'get',
  dataBuild () {
    return topoArtif
  }
}
