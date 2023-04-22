import { useState } from 'react';
import { animalNames, animalsNeeded, shuffleArray } from '../../utils/utils';
import { LevelOverlay } from '../LevelOverlay';
import { GameCard } from '../GameCard';

export const GameStarted = ({
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
