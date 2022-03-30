import { useSelector } from 'hooks';
import { FC, memo, useEffect } from 'react';
import AppContext from '../appContext/appContext';
import { VariantType, useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const _dispatch = useDispatch();
  const app = useSelector(({ App }) => App);
  const { enqueueSnackbar } = useSnackbar();

  const _dispararNotificacao = (mensagem: string, variante?: VariantType) => {
    enqueueSnackbar(mensagem, {
      variant: variante ?? 'success',
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      autoHideDuration: 3000,
    });
    _dispatch(AppActions.toggleNotificacao({}));
  };

  useEffect(() => {
    if (app.notificacao.mensagem) {
      _dispararNotificacao(app.notificacao.mensagem ?? '', app.notificacao.variante);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.notificacao]);

  return (
    <>
      <AppContext.Provider value={app}>{children}</AppContext.Provider>
    </>
  );
};

export default memo(AppProvider);
