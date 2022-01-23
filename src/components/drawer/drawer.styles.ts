import styled from 'styled-components';

//Div Menu
export const DivMenu = styled.div`
  height: 100vh;
  width: 80px;
  color: ${(props) => `${props.theme.color.primary}`};
`;

//Div Logo
export const DivLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: ${(props) => `${props.theme.color.white}`};
`;

//Div Botões
export const DivBotoes = styled.div`
  box-shadow: inset 0 10px 9px -7px rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 8px 0px;
  background-color: ${(props) => `${props.theme.color.white}`};
  height: calc(100% - 166px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const BotaoDrawer = styled.button`
  padding: 10px 0px;
  margin: 4px 0px;
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  color: ${(props) => `${props.theme.color.primary}`};
  &:hover {
    background-color: ${(props) => `${props.theme.color.dark}`}80;
  }
`;

//Div Rodapé
export const DivRodape = styled.div`
  cursor: pointer;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 10px 9px -7px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => `${props.theme.color.white}`};

  &:hover {
    background-color: ${(props) => `${props.theme.color.dark}`}80;
  }
`;
