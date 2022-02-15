import { Divider } from 'components';
import { FC } from 'react';
import * as styled from './conteudoLanding.styles';

interface ConteudoLandingProps {
  titulo: string;
  texto: string;
  posicaoImagem?: 'esquerda' | 'direita';
  imagem?: React.ReactElement;
}

const ConteudoLanding: FC<ConteudoLandingProps> = ({ titulo, texto, imagem, posicaoImagem }) => {
  return (
    <styled.DivConteudo>
      <styled.DivTitulo>
        <h1>{titulo}</h1>
        <Divider />
      </styled.DivTitulo>
    </styled.DivConteudo>
  );
};

export default ConteudoLanding;
