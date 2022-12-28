import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: var(--bg-0);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
`;

export const CharacterImage = styled.img<{ found: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  ${(props) => (!props.found ? 'filter: grayscale(100%);' : null)}
`;
