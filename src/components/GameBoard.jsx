import { Container } from 'react-bootstrap';
import { GameCard } from './GameCard';
import { StartScreen } from './StartScreen';
import { GameOverScreen } from './GameOverScreen';
import { LevelOverlay } from './LevelOverlay';
import { useEffect, useState } from 'react';
import { animalNames, animalsNeeded, shuffleArray } from '../utils/utils';

const GameStarted = ({
  currentLevel,
  setCurrentLevel,
  showLevelOverlay,
  setIsGameOver,
  setIsGameStarted,
  highestScore,
  setHighestScore,
  currentScore,
  setCurrentScore,
}) => {
  const [clickedAnimals, setClickedAnimals] = useState([]);

  const renderAnimals = (count) => {
    return (
      <>
        {shuffleArray(
          animalNames.slice(0, count).map((name) => (
            <GameCard
              key={name}
              animal={name}
              {...{
                clickedAnimals,
                setClickedAnimals,
                setIsGameOver,
                setIsGameStarted,
                currentScore,
                setCurrentScore,
                highestScore,
                setHighestScore,
                currentLevel,
                setCurrentLevel,
              }}
            />
          ))
        )}
      </>
    );
  };

  return (
    <>
      {showLevelOverlay ? (
        <LevelOverlay {...{ currentLevel }} />
      ) : (
        renderAnimals(animalsNeeded(currentLevel))
      )}
    </>
  );
};

const GameNotStarted = ({
  isGameOver,
  currentScore,
  setIsGameOver,
  setIsGameStarted,
  currentLevel,
  setCurrentScore,
  setCurrentLevel,
}) => {
  return (
    <>
      {isGameOver ? (
        <GameOverScreen
          {...{
            currentScore,
            currentLevel,
            setIsGameOver,
            setIsGameStarted,
            setCurrentScore,
            setCurrentLevel,
          }}
        />
      ) : (
        <StartScreen {...{ setIsGameStarted }} />
      )}
    </>
  );
};

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
