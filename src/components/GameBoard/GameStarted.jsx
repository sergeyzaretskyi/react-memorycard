import { useState } from 'react';
import { animalNames, animalsNeeded, shuffleArray } from '../../utils/utils';
import { LevelOverlay } from '../LevelOverlay';
import { GameCard } from '../GameCard';
import { GameFinished } from '../GameFinished';

export const GameStarted = ({
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
}) => {
  const [isGameFinished, setIsGameFinished] = useState(false);

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
                setShowLevelOverlay,
                setIsGameFinished,
              }}
            />
          ))
        )}
      </>
    );
  };

  return (
    <>
      {isGameFinished ? (
        <GameFinished
          {...{
            setIsGameOver,
            setIsGameStarted,
            setCurrentScore,
            setCurrentLevel,
            highestScore,
            setIsGameFinished,
            setClickedAnimals,
          }}
        />
      ) : showLevelOverlay ? (
        <LevelOverlay {...{ currentLevel }} />
      ) : (
        renderAnimals(animalsNeeded(currentLevel))
      )}
    </>
  );
};
