import styled from 'styled-components';

export const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: calc(100% - 64px);
  padding: 0px 32px;
  height: 60px;
  color: ${({ theme }) => theme.coresExtras.branco};
  background-color: ${({ theme }) => theme.coresExtras.preto};
  font-family: 'Qanelas Soft';
  font-size: 24px;

  .quarto {
    margin-right: 4px;
    font-weight: 700;
  }

  .digital {
    font-weight: 300;
  }
`;
