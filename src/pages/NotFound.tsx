import { Robot } from 'react-bootstrap-icons';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <Robot />
        <h2>Page not found</h2>
        <p>Try another URL</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  background: var(--bg-0);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  svg {
    font-size: 140px;
  }

  h2,
  p {
    text-transform: uppercase;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export default NotFound;
