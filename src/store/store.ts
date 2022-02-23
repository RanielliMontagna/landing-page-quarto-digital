import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './app/appSlice';
import configuracoesSlice from './config/configuracoesSlice';
import clientesSlice from './clientes/clientesSlice';
import produtosSlice from './produtos/produtosSlice';
import quartosSlice from './quartos/quartosSlice';
import servicosSlice from './servicos/servicosSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      App: appSlice.reducer,
      Config: configuracoesSlice.reducer,
      Clientes: clientesSlice.reducer,
      Produtos: produtosSlice.reducer,
      Quartos: quartosSlice.reducer,
      Servicos: servicosSlice.reducer,
    },
  });

const store = makeStore();

export type DispatchFunction = ReturnType<typeof store.dispatch>;
export type State = ReturnType<typeof store.getState>;

export type ThunkStatefulAction<ReturnType = void, Extra = unknown> = ThunkAction<
  ReturnType,
  State,
  Extra,
  Action<string>
>;

export default store;
