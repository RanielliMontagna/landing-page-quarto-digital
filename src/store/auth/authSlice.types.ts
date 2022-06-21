export type Token = string | null;

export type Profile = {
  id: number;
  nome: string;
  iat: number;
  exp: number;
};
export interface AuthSlice {
  token: Token;
  isAuthenticated: boolean;
  profile: Profile | null;
}

export interface AuthSliceWithCallbacks extends AuthSlice {}
