import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  level: {
    id: string;
    name: string;
  };
  current: boolean;
}

const RankingLevelButton: React.FC<IProps> = ({ level, current }) => {
  const navigate = useNavigate();
  const switchLevel = () => {
    navigate(`/ranking/${level.id}`);
  };
  return (
    <Button type='button' onClick={switchLevel} current={current}>
      {level.name}
    </Button>
  );
};

const Button = styled.button<{ current: boolean }>`
  background: ${(props) => (props.current ? 'var(--bg-1)' : 'var(--bg-0)')};
`;

export default RankingLevelButton;
