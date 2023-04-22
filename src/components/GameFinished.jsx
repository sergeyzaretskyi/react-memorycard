import { Button } from 'react-bootstrap';

export const GameFinished = ({
  setIsGameOver,
  setIsGameStarted,
  setCurrentScore,
  setCurrentLevel,
  highestScore,
  setIsGameFinished,
}) => {
  const onPlayAgainClick = () => {
    setIsGameOver(false);
    setIsGameStarted(true);
    setCurrentScore(0);
    setCurrentLevel(1);
    setIsGameFinished(false);
  };

  return (
    <div className="overlay-container" style={{ display: 'block' }}>
      <div className="overlay-content">
        <p className="fs-3">Congratulations!</p>

        <p className="fs-4">
          You've passed all the levels with the highest score of{' '}
          <b>{highestScore}</b> points.
        </p>

        <Button onClick={() => onPlayAgainClick()} size="lg" className="mt-4">
          Play again
        </Button>
      </div>
    </div>
  );
};
