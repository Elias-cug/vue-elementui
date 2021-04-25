const topoArtif = {
  nodes: [
    {
      id: 'N01',
      label: 'User',
      nextApmNode: '',
      type: 'User',
      nodeType: 'USER'
    },
    {
      id: 'N02',
      label: 'Firewall',
      nextApmNode: '',
      type: 'Firewall',
      nodeType: 'FIREWALL'
    },
    {
      id: 'N03',
      label: 'Switch-pre',
      type: 'Switch',
      nodeType: 'SWITCH',
      costTime: '0.009',
      throughPut: '50',
      packetLossRate: '100'
    },
    {
      id: 'N04',
      label: 'Web',
      nextApmNode: 'N06',
      type: 'Service',
      nodeType: 'APM',
      statusCode: '400',
      costTime: '5.2'
    },
    {
      id: 'N05',
      label: 'Switch-Default',
      type: 'Switch',
      nodeType: 'SWITCH',
      costTime: '3.89',
      throughPut: '20',
      packetLossRate: '200'
    },
    {
      id: 'N06',
      label: 'Service',
      nextApmNode: 'N07',
      type: 'Service',
      nodeType: 'APM',
      statusCode: '200',
      costTime: '1.009'
    },
    {
      id: 'N07',
      label: 'Controller',
      nextApmNode: '',
      type: 'Service',
      nodeType: 'APM',
      statusCode: '200',
      costTime: '1.009'
    }
  ],
  edges: [
    {
      id: 'N01-N02',
      source: 'N01',
      target: 'N02'
    },
    {
      id: 'N01-N01',
      source: 'N01',
      target: 'N01'
    },
    {
      id: 'N02-N03',
      source: 'N02',
      target: 'N03'
    },
    {
      id: 'N03-N04',
      source: 'N03',
      target: 'N04',
      resTime: 7
    },
    {
      id: 'N04-N05',
      source: 'N04',
      target: 'N05',
      resTime: 8
    },
    {
      id: 'N05-N06',
      source: 'N05',
      target: 'N06',
      resTime: 9
    },
    {
      id: 'N06-N05',
      source: 'N06',
      target: 'N05',
      resTime: 10
    },
    {
      id: 'N05-N07',
      source: 'N05',
      target: 'N07',
      resTime: 11
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
