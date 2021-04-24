const Mock = require('mockjs')
import { mockTopoData } from './visData/topoData'
Mock.mock(
  RegExp(mockTopoData.url + '.*'),
  mockTopoData.method,
  mockTopoData.dataBuild
)
