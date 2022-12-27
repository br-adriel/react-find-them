import React from 'react';
import styled from 'styled-components';

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export default Container;
