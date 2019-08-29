import { createStore } from 'redux'
import rootReducer from './reducers/rootRecuder'

let store  = null

store = createStore(rootReducer)

export default store