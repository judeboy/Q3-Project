import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logger,
  )
)

export default store
