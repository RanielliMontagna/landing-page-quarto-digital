import { FC } from 'react';
import * as styled from './cardIndicador.styles';

interface CardIndicadorProps {
  titulo: string;
  valor: number;
  index: number;
}

const CardIndicador: FC<CardIndicadorProps> = ({ titulo, valor }) => {
  return <styled.CardIndicador></styled.CardIndicador>;
};

export default CardIndicador;
