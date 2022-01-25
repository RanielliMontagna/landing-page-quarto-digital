import styled from 'styled-components';

export const DivChildren = styled.div`
  width: 100%;
  overflow: auto;
  color: ${({ theme }) => theme.cores.secundaria};
  background-color: ${({ theme }) => theme.cores.terciaria};
`;
