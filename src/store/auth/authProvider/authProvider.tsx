import React, { useEffect } from 'react';
import AuthContext from '../authContext/authContext';
import jwt from 'jsonwebtoken';

import actions from '../actions';
import { useSelector } from 'hooks';
import { useDispatch } from 'store/hooks';
import { AppActions } from 'store';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const _dispatch = useDispatch();
  const auth = useSelector(({ Auth }) => Auth);

  useEffect(() => {
    if (auth.token) {
      const secret = process.env.REACT_APP_JWT_SECRET;

      if (!secret) {
        _dispatch(actions.storeIsAuthenticated(false));
        _dispatch(actions.storeToken(null));
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Token expirado ou inválido',
            variante: 'warning',
          })
        );
      } else {
        // Verifica o token
        jwt.verify(auth.token, secret, async (err) => {
          if (err) {
            _dispatch(actions.storeIsAuthenticated(false));
            _dispatch(actions.storeToken(null));
            _dispatch(
              AppActions.toggleNotificacao({
                mensagem: 'Token expirado ou inválido',
                variante: 'warning',
              })
            );
          } else {
            console.log(auth.isAuthenticated);
            if (!auth.isAuthenticated) {
              _dispatch(
                AppActions.toggleNotificacao({
                  mensagem: 'Login realizado com sucesso!',
                })
              );
              _dispatch(actions.storeIsAuthenticated(true));
            }
          }
        });
      }
    }
  }, [auth, _dispatch]);

  return <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
