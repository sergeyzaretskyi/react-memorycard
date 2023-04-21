import { useEffect, useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';

export const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highestScore, setHighestScore] = useState(
    localStorage.getItem('highestScore') || 0
  );
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    localStorage.setItem('highestScore', highestScore);
  }, [highestScore]);

  return (
    <>
      <ScoreBoard {...{ highestScore, currentScore }} />
      <GameBoard
        {...{
          isGameOver,
          setIsGameOver,
          currentScore,
          highestScore,
          isGameStarted,
          setIsGameStarted,
          setHighestScore,
          setCurrentScore,
        }}
      />
    </>
  );
};
