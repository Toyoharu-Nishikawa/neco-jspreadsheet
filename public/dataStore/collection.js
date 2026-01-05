import {Store} from "/neco-cdn/neco-store/index.js"

const initial = {
  addCounter : 0
}

export const collection = new Store( structuredClone(initial))

const beforeEmittingFunc = (data, key, value) => {
}

const afterEmittingFunc = (data, key, value) => {
}
const initialize = () => {
}

initialize()
