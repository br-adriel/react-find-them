import React, { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../contexts/GameContext';

const GameImage = () => {
  const { selectedLevel, clickLevelImage, timer } = useContext(GameContext);
  const clickImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const xClick = e.nativeEvent.offsetX;
    const yClick = e.nativeEvent.offsetY;
    const target = e.target as HTMLImageElement;
    const width = target.width;
    const height = target.height;
    const x = Math.trunc((xClick * 1000) / width);
    const y = Math.trunc((yClick * 3000) / height);
    clickLevelImage(x, y);
  };

  if (!selectedLevel) return null;
  return (
    <ImgTag
      src={selectedLevel.image}
      alt=''
      onClick={clickImage}
      timerRunning={timer.isRunning}
    />
  );
};

const ImgTag = styled.img<{ timerRunning: boolean }>`
  width: 100%;
  border-radius: 5px;
  cursor: crosshair;
  ${(props) => (props.timerRunning ? null : 'display: none;')}
`;

export default GameImage;
