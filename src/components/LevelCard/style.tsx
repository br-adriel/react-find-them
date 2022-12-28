import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: var(--bg-0);
  color: #fff;

  img {
    width: 100%;
    border-radius: 5px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
`;
