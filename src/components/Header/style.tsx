import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderTag = styled.header`
  background: var(--bg-0);
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: 'Bungee', cursive;
      font-size: 2rem;
      line-height: 0.5rem;
    }

    div {
      display: flex;
      gap: 8px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
      }
    }
  }
`;

export const LinkTag = styled(Link)`
  opacity: 1 !important;
  text-decoration: none !important;
`;
