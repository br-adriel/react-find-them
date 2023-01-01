import React, { useEffect, useState } from 'react';
import { Award } from 'react-bootstrap-icons';
import { Highscore } from '../../global/types';
import { getRanking } from '../../utils/getRanking';
import * as S from './style';

const RankingList: React.FC<{ levelId: string }> = ({ levelId }) => {
  const [highscores, setHighscores] = useState<Highscore[] | null>(null);
  useEffect(() => {
    const getHighscores = async () => {
      const data = await getRanking(levelId);
      setHighscores(data);
    };

    getHighscores();
  }, []);

  if (!highscores)
    return (
      <S.Message>
        <h2>Loading...</h2>
      </S.Message>
    );
  if (!highscores.length)
    return (
      <S.Message>
        <h2>No games played yet</h2>
      </S.Message>
    );
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th title='position'>#</th>
            <th>Name</th>
            <th>Level</th>
            <th>Points</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {highscores.map((hs, i) => {
            return (
              <tr key={hs.id}>
                <td>
                  <Award />
                  <span>{i + 1}</span>
                </td>
                <td>{hs.player}</td>
                <td>{hs.level.name}</td>
                <td>{hs.points}</td>
                <td>
                  {hs.time.minutes < 10 ? '0' : null}
                  {hs.time.minutes}:{hs.time.seconds < 10 ? '0' : null}
                  {hs.time.seconds}
                </td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default RankingList;
