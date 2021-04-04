/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Axios from 'axios';
import { APP_ENTRYPOINT } from '../../../config/config';
import { request } from '../../request/Request';

function* logout(){
  return yield request.post(`${APP_ENTRYPOINT}auth/logout`);
}

const user = {
    logout
};

export default user;
