import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;
    --bg-0: #22223B;
    --bg-1: #339989;
    --bg-2: #A63A50;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Hind', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
  }

  button {
    background: var(--bg-1);
    color: #fff;
    padding: 6px 8px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: ease .3s all;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1rem;

    svg {
      font-size: 1rem;
    }
    
    :hover {
      background: var(--bg-2);
    }
  }

  a {
    color: inherit;
    opacity: .9;
    text-decoration: none;

    :hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;
