import styled from 'styled-components';

export const DivPageHeader = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    text-transform: capitalize;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    > div {
      margin-bottom: 8px;
    }
  }
`;
