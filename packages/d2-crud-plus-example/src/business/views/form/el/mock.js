import mockUtil from '../../../mock/base'

let options = {
  name: 'el',
  idGenerator: 0
}
const list = [
  {
  }
]
options.list = list
let mock = mockUtil.buildMock(options)
export default mock
