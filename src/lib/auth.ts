import { initReactQueryAuth } from 'react-query-auth';

import { loginWithEmailAndPassword, LoginCredentialsDTO, UserResponse } from 'features/auth';

async function handleUserResponse(data: UserResponse) {
  const { jwt } = data;
  //   storage.setToken(jwt);
  //   return user;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

// export const { AuthProvider, useAuth } = initReactQueryAuth<>();
