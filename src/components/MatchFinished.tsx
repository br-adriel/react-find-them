import { useContext } from 'react';
import { Clock, Star } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GameContext from '../contexts/GameContext';

const MatchFinished = () => {
  const { match, timer } = useContext(GameContext);
  const navigate = useNavigate();
  const playAnotherLevel = () => {
    navigate('/play');
  };
  return (
    <Wrapper>
      <h3>Level finished!</h3>
      <div>
        <MatchInfo>
          <h4>
            <Star /> {match.points} points
          </h4>
          <h4>
            <Clock />
            {timer.minutes < 10 ? '0' : null}
            {timer.minutes}:{timer.seconds < 10 ? '0' : null}
            {timer.seconds}
          </h4>
        </MatchInfo>
        <button type='button' onClick={playAnotherLevel}>
          Play another level
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--bg-0);
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-radius: 5px;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 576px) {
    align-items: center;
    text-align: center;

    & > div {
      align-items: stretch;

      button {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MatchInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  h4 {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export default MatchFinished;
