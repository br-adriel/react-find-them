import { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../contexts/GameContext';
import { Pause, Play } from 'react-bootstrap-icons';

const Timer = () => {
  const { timer } = useContext(GameContext);

  const changeTimer = () => {
    if (timer.isRunning) timer.pause();
    else timer.start();
  };

  return (
    <TimerWrapper>
      <p>
        {timer.minutes < 10 ? '0' : null}
        {timer.minutes}:{timer.seconds < 10 ? '0' : null}
        {timer.seconds}
      </p>
      <button onClick={changeTimer}>
        {timer.isRunning ? <Pause /> : <Play />}
      </button>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  p,
  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: inherit;
    }
  }

  p {
    padding: 8px;
    border-radius: 5px;
    background: var(--bg-0);
    color: #fff;
    flex-grow: 1;
  }
`;

export default Timer;
