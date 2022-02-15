import styled from 'styled-components';

export const DivConteudo = styled.div`
  color: ${({ theme }) => theme.coresExtras.branco};
  display: flex;
  justify-content: center;
`;

export const DivTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 4px;
  }
`;
