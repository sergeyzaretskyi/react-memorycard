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
