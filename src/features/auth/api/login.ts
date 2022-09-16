import { axios } from 'lib/axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  identfier: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/public/user/login', JSON.stringify({ ...data, identityType: 'default' }));
};
