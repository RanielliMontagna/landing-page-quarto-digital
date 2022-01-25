import configuracoesSlice from './configuracoesSlice';
import fetchConfiguracoes from './thunks/fetchConfiguracoes';
import fetchDadosDoPlano from './thunks/fetchDadosDoPlano';

const actions = {
  ...configuracoesSlice.actions,
  fetchConfiguracoes,
  fetchDadosDoPlano,
};

export default actions;
