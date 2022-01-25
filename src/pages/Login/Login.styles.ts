import styled from 'styled-components';

// Div Geral
export const DivBase = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.cores.terciaria};
  color: ${({ theme }) => theme.cores.secundaria};
  height: 100vh;
`;

// Div Esquerda - Layout
export const DivLayout = styled.div`
  background-color: ${({ theme }) => theme.cores.primaria};
  width: calc(50% - 64px);
  height: calc(100% - 64px);
  padding: 32px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.coresExtras.branco};

  .header {
    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  span {
    background-color: ${({ theme }) => theme.coresExtras.preto};
    padding: 1px 6px 5px 6px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    h2 {
      display: none;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const DivLayoutHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const DivLayoutImagem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 50vh;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Div Direita - Login
export const DivConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100vh;
  color: ${({ theme }) => theme.cores.secundaria};

  @media (max-width: 960px) {
    width: 100%;
  }

  hr {
    border: none;
    border-radius: 5px;

    width: 100px;
    height: 3px;
    color: ${({ theme }) => theme.cores.primaria};
    background-color: ${({ theme }) => theme.cores.primaria};
  }
`;

export const DivFields = styled.div`
  width: 70%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 32px;
  color: ${({ theme }) => theme.coresExtras.cinzaEscuro};
  font-weight: 100;

  @media (max-width: 1024px) {
    bottom: 16px;
  }
`;

export const DivField = styled.div`
  width: 80%;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const Label = styled.p``;

export const Input = styled.input`
  font-size: ${(props) => `${props.theme.tamanhoFonte.sm}`};
  color: ${({ theme }) => theme.cores.secundaria};
  width: calc(100% - 20px);
  margin: 8px 0px 32px 0px;
  padding: 15px 10px;
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.coresExtras.cinzaEscuro};
`;

export const DivCheckbox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const StayConnect = styled.div`
  display: flex;
  align-items: center;
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.coresExtras.cinzaClaro};
  font-weight: 100;
  font-size: ${(props) => `${props.theme.tamanhoFonte.sm}`};
  cursor: pointer;
`;

export const ButtonEnter = styled.button`
  margin-top: 32px;
  width: 80%;
  height: 44px;
  background-color: ${({ theme }) => theme.cores.primaria};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.coresExtras.branco};
  font-size: ${(props) => `${props.theme.tamanhoFonte.lg}`};
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  @media (min-width: 1500px) {
    width: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.cores.primaria}90;
  }
`;
