export type Token = string | null;

export interface AuthSlice {
  token: Token;
  isAuthenticated: boolean;
}

export interface AuthSliceWithCallbacks extends AuthSlice {}
