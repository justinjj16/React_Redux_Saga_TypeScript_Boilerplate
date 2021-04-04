/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Axios from 'axios';
import { APP_ENTRYPOINT } from '../../../config/config';

export interface createUser {
  firstName: string,
  lastName:string,
  email:string,
  password:string,
  role:string,
}
export interface loginUser{
  email:string,
  password:string
}

function userSignUp(value:createUser) {
  return Axios.post(`${APP_ENTRYPOINT}auth/signup`,
    value);
}
function login(value:loginUser) {
  return Axios.post(`${APP_ENTRYPOINT}auth/login`,
    value);
}

const withoutAuth = {
  userSignUp,login
};

export default withoutAuth;
