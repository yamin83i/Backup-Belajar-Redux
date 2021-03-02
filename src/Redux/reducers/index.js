import {EMAIL_CHANGE, USERNAME_CHANGE, PASSWORD_CHANGE,ADDRESS_CHANGE} from '../Action/type';
import {combineReducers} from 'redux';

const intialState = {
  email: '',
  username: '',
  password: '',
  addres:""
};

const reducers = (state = {intialState}, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, email: action.payload};
    case USERNAME_CHANGE:
      return {...state, username: action.payload};
    case PASSWORD_CHANGE:
      return {...state, password: action.payload};
      case ADDRESS_CHANGE:
        return{...state,addres:action.payload} 
      default:
        return state
  }
};

const appState = combineReducers({
  reducers,
})
export default appState