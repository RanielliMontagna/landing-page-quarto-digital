import { VariantType } from 'notistack';

export type Notificacao = {
  variante?: VariantType;
  mensagem?: string;
};

export type AppSlice = {
  loading: boolean;
  tema: string | null;
  notificacao: Notificacao;
};
