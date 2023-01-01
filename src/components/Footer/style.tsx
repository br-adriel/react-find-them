import styled from 'styled-components';

export const FooterTag = styled.footer`
  padding: 10px;
  background: var(--bg-0);
  color: #fff;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div,
    a {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }

  p {
    text-align: center;
  }

  a {
    font-size: 1.2rem;
  }
`;
