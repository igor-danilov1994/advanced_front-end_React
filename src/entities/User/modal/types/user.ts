export interface User {
  id: string;
  username: string;
  avatar?: string;
  role?: 'ADMIN' | 'USER';
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
