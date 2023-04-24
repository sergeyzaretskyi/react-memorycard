import { StartScreen } from '../StartScreen';
import { GameOverScreen } from '../GameOverScreen';

export const GameNotStarted = ({
  isGameOver,
  currentScore,
  setIsGameOver,
  setIsGameStarted,
  currentLevel,
  setCurrentScore,
  setCurrentLevel,
  setClickedAnimals,
  setShowLevelOverlay,
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
            setClickedAnimals,
            setShowLevelOverlay,
          }}
        />
      ) : (
        <StartScreen {...{ setIsGameStarted }} />
      )}
    </>
  );
};
