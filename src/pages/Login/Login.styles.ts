import styled from 'styled-components';

// Div Geral
export const DivBase = styled.div`
  display: flex;
  background-color: ${(props) => `${props.theme.color.dark}`};
  color: ${(props) => `${props.theme.color.white}`};
  height: 100vh;
`;

// Div Esquerda - Layout
export const DivLayout = styled.div`
  background-color: ${(props) => `${props.theme.color.primary}`};
  width: calc(50% - 64px);
  height: calc(100% - 64px);
  padding: 32px;
  display: flex;
  flex-direction: column;

  span {
    background-color: ${(props) => `${props.theme.color.dark}`};
    padding: 1px 6px 5px 6px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
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
`;

// Div Direita - Login
export const DivConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100vh;
  color: ${(props) => `${props.theme.color.white}`};

  @media (max-width: 1024px) {
    width: 100%;
  }

  hr {
    border: none;
    border-radius: 5px;

    width: 100px;
    height: 3px;
    color: ${(props) => `${props.theme.color.primary}`};
    background-color: ${(props) => `${props.theme.color.primary}`};
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
  color: ${(props) => `${props.theme.color.darkGray}`};
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
  font-size: ${(props) => `${props.theme.fontSizes.sm}`};
  color: ${(props) => `${props.theme.color.white}`};
  width: calc(100% - 20px);
  margin: 8px 0px 32px 0px;
  padding: 15px 10px;
  background-color: transparent;
  border: solid 1px ${(props) => `${props.theme.color.darkGray}`};
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
  color: ${(props) => `${props.theme.color.whiteGray}`};
  font-weight: 100;
  font-size: ${(props) => `${props.theme.fontSizes.sm}`};
  cursor: pointer;
`;

export const ButtonEnter = styled.button`
  margin-top: 32px;
  width: 80%;
  height: 44px;
  background-color: ${(props) => `${props.theme.color.primary}`};
  border: none;
  border-radius: 4px;
  color: ${(props) => `${props.theme.color.white}`};
  font-size: ${(props) => `${props.theme.fontSizes.lg}`};
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  @media (min-width: 1500px) {
    width: 60%;
  }

  &:hover {
    background-color: ${(props) => `${props.theme.color.primary}90`};
  }
`;
