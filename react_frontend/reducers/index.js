import { combineReducers } from 'redux'
import userType from './userType'
import todos from './todos'

const app = combineReducers({
  userType, 
  todos
})

export default app