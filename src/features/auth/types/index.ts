export type AuthUser = {
  id?: string;
  username: string;
  icon: string;
  group?: string;
  email?: string;
  sex?: number;
  livingArea?: string;
  age?: number;
  appeal?: string;
  profession?: string;
  updatedAt?: string;
};

export type UserResponse = {
  token: string;
};
