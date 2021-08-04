const commonConfig = {
  nodeLineWidth: 2,
  nodeSelectedLineWidth: 3,
  nodeLineWidthOne: 1,
  nodeLineWidthTwo: 2,

  edgeLineWidth: 2,
  edgeSelectedLineWidth: 3,
  edgeLineWidthOne: 1,
  edgeLineWidthTwo: 2
}
const whiteTheme = {
  nodeColor: '#00C774',
  nodeRightColor: '#00C774',
  nodeErrorColor: '#FD5151',
  nodeLevelOne: '#00C774',
  nodeLevelTwo: '#FF8F16',
  nodeLevelThree: '#FD5151',

  edgeColor: '#00C774',
  edgeRigthColor: '#00C774',
  edgeErrorColor: '#FD5151',
  edgeLevelOne: '#00C774',
  edgeLevelTwo: '#FF8F16',
  edgeLevelThree: '#FD5151'
}
const blackTheme = {}

export function getTheme () {
  const theme = 'white'
  const result = theme === 'white' ? whiteTheme : blackTheme
  return Object.assign(result, commonConfig)
}
