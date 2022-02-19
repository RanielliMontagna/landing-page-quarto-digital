import { Divider } from 'components';
import { FC } from 'react';
import * as styled from './conteudoLanding.styles';

interface ConteudoLandingProps {
  titulo: string;
  texto: string;
  imagem?: string;
}

const ConteudoLanding: FC<ConteudoLandingProps> = ({ titulo, texto, imagem }) => {
  return (
    <styled.DivConteudo>
      <styled.DivTexto>
        <h1>{titulo}</h1>
        <Divider styles={{ margin: '0px 0px 16px 0px', width: '160px' }} />
        <p style={{ textAlign: 'justify', fontSize: '1em' }}>{texto}</p>
      </styled.DivTexto>
      <styled.DivImagem>
        <styled.Imagem src={imagem} alt={imagem} />
      </styled.DivImagem>
    </styled.DivConteudo>
  );
};

export default ConteudoLanding;
