import {EMAIL_CHANGE,USERNAME_CHANGE, PASSWORD_CHANGE,ADDRESS_CHANGE} from "./type"

const emailChange = (text) => {
    return {
      type: EMAIL_CHANGE,
      payload: text,
    };
  };

const usernameChange = (text) => {
    return{
        type:USERNAME_CHANGE,
        payload:text
    }
}

const passwordChange = (text)=>{
    return{
        type:PASSWORD_CHANGE,
        payload:text
    }
}

const address =(text)=>{
  return{
    type:ADDRESS_CHANGE,
    payload:text
  }
}

  export { emailChange,usernameChange,passwordChange, address };