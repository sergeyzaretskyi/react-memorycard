import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { GameStarted } from './GameStarted';
import { GameNotStarted } from './GameNotStarted';

export const GameBoard = ({
  isGameOver,
  setIsGameOver,
  currentScore,
  highestScore,
  isGameStarted,
  setIsGameStarted,
  setHighestScore,
  setCurrentScore,
}) => {
  const [showLevelOverlay, setShowLevelOverlay] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLevelOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="mt-3 d-flex gap-2 justify-content-center flex-wrap">
      {isGameStarted ? (
        <GameStarted
          {...{
            currentLevel,
            setCurrentLevel,
            showLevelOverlay,
            setIsGameOver,
            setIsGameStarted,
            highestScore,
            setHighestScore,
            currentScore,
            setCurrentScore,
          }}
        />
      ) : (
        <GameNotStarted
          {...{
            isGameOver,
            currentLevel,
            currentScore,
            setIsGameOver,
            setIsGameStarted,
            setCurrentScore,
            setCurrentLevel,
          }}
        />
      )}
    </Container>
  );
};
