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
          }}
        />
      ) : (
        <StartScreen {...{ setIsGameStarted }} />
      )}
    </>
  );
};
