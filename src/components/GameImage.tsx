import { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../contexts/GameContext';

const GameImage = () => {
  const { selectedLevel } = useContext(GameContext);
  if (!selectedLevel) return null;
  return <ImgTag src={selectedLevel.image} alt='' />;
};

const ImgTag = styled.img`
  width: 100%;
  border-radius: 5px;
  cursor: crosshair;
`;

export default GameImage;
