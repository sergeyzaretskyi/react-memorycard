import { Container } from 'react-bootstrap';
import { GameCard } from './GameCard';
import { StartScreen } from './StartScreen';
import { GameOverScreen } from './GameOverScreen';
import { LevelOverlay } from './LevelOverlay';
import { useEffect, useState } from 'react';
import { animalNames, animalsNeeded } from '../utils/utils';

const GameStarted = ({ showLevelOverlay }) => {
  const [currentLevel, setCurrentLevel] = useState(1);

  const renderAnimals = (count) => {
    return (
      <>
        {animalNames.slice(0, count).map((name) => (
          <GameCard
            key={name}
            animal={name}
            onClick={(e) => onAnimalClick(e)}
          />
        ))}
      </>
    );
  };

  const onAnimalClick = (e) => {
    console.log(e.target.name);
  };

  return (
    <>
      {showLevelOverlay ? (
        <LevelOverlay />
      ) : (
        renderAnimals(animalsNeeded(currentLevel))
      )}
    </>
  );
};

const GameNotStarted = ({ isGameOver, currentScore, setIsGameStarted }) => {
  return (
    <>
      {isGameOver ? (
        <GameOverScreen {...{ currentScore, setIsGameStarted }} />
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
  isGameStarted,
  setIsGameStarted,
}) => {
  const [showLevelOverlay, setShowLevelOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLevelOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="mt-3 d-flex gap-2 justify-content-center flex-wrap">
      {isGameStarted ? (
        <GameStarted {...{ showLevelOverlay }} />
      ) : (
        <GameNotStarted {...{ isGameOver, currentScore, setIsGameStarted }} />
      )}
    </Container>
  );
};
