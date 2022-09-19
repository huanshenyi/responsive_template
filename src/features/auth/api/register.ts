import { axios } from 'lib/axios';

import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
  identfier: string;
  password: string;
};

export const registerWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/public/user/regist', data);
};
