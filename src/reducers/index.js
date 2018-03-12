import {combineReducers} from 'redux';

const studentsAge = (state = "", action) => {
  if(action.type === "SET_AGE"){
    return action.value
  }
  return state
}

const rootReducer = combineReducers({
  studentsAge
})

export default rootReducer;