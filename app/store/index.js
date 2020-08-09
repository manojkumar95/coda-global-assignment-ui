import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga';
import {
  camelCase
} from 'lodash'

import saga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const importAll = r => {
  const files = {}
  r.keys().forEach(key => {
    const reducerName = camelCase(key.replace(/(^.\/|.js$)/g, ''))
    files[reducerName] = r(key).default
  })
  return files
}

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'Agent | Happyfox Chat'
  }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const reducers = importAll(require.context('../reducers', false, /\.js$/))
const rootReducer = combineReducers(reducers)

const configureStore = async() => {
  try {
    const store = createStore(rootReducer, enhancer)
    sagaMiddleware.run(saga)

    return store
  } catch (err) {
    console.error('Error while setting up sagas...')
  }
}

export default configureStore;
