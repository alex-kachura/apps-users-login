import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

interface Global {
  document: Document;
  window: Window;
  localStorage: Storage
}

declare var global: Global

const localStorageMock = (function () {
  let store = {}

  return {
    key: (index: number) => null,
    length: 0,
    getItem: function (key: string) {
      return store[key] || null
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString()
    },
    removeItem: function (key: string) {
      delete store[key]
    },
    clear: function () {
      store = {}
    },
  }
})()

global.localStorage = localStorageMock

Enzyme.configure({ adapter: new Adapter() })
