import {combineReducers} from "redux";

const infant = (state = [], action) => {
  if(action.type === "INFANTS_LOADED"){
    return action.value
  }
  return state
}
const toddler = (state = [], action) => {
  if(action.type === "TODDLERS_LOADED"){
    return action.value
  }
  return state
}
const child = (state = [], action) => {
  if(action.type === "CHILDREN_LOADED"){
    return action.value
  }
  return state
}
const adolescent = (state = [], action) => {
  if(action.type === "ADOLESCENTS_LOADED"){
    return action.value
  }
  return state
}
const adult = (state = [], action) => {
  if(action.type === "ADULTS_LOADED"){
    return action.value
  }
  return state
}

const childSeed = (state = [], action) => {
  if (action.type === "GET_CHILD_SEED_DONE") {
    return action.value;
  }
  return state;
}

const adultSeed = (state = [], action) => {
  if (action.type === "GET_ADULT_SEED_DONE") {   
    return action.value;
  }
  return state;
}

const adolescentSeed = (state = [], action) => {
  if (action.type === "GET_ADOLESCENT_SEED_DONE") {   
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  infant,toddler,child,childSeed,adolescent,adult, adultSeed, adolescentSeed
});
export default rootReducer;
