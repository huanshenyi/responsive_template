import { initReactQueryAuth } from 'react-query-auth';
import jwt_decode from 'jwt-decode';

import {
  loginWithEmailAndPassword,
  LoginCredentialsDTO,
  UserResponse,
  getUser,
  registerWithEmailAndPassword,
  RegisterCredentialsDTO,
  AuthUser,
} from 'features/auth';
import { Spinner } from 'components/Elements';
import storage from 'utils/storage';
import { AuthUser as userType } from 'features/auth';

async function handleUserResponse(data: UserResponse) {
  const { token } = data;
  storage.setToken(token);
  var user = jwt_decode<Omit<userType, 'id'>>(token);
  console.log('user:', user);
  return user;
}

async function loadUser() {
  // if (storage.getToken()) {
  //   const data = await getUser();
  //   return data;
  // }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
