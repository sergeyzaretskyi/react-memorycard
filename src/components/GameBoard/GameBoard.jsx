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
  currentLevel,
  setCurrentLevel,
  showLevelOverlay,
  setShowLevelOverlay,
  clickedAnimals,
  setClickedAnimals,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLevelOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showLevelOverlay]);

  return (
    <Container className="mt-3 d-flex gap-2 justify-content-center flex-wrap">
      {isGameStarted ? (
        <GameStarted
          {...{
            currentLevel,
            setCurrentLevel,
            showLevelOverlay,
            setShowLevelOverlay,
            setIsGameOver,
            setIsGameStarted,
            highestScore,
            setHighestScore,
            currentScore,
            setCurrentScore,
            clickedAnimals,
            setClickedAnimals,
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
            setClickedAnimals,
            setShowLevelOverlay,
          }}
        />
      )}
    </Container>
  );
};
