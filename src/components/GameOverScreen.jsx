import { Button, Container } from 'react-bootstrap';

export const GameOverScreen = ({
  currentScore,
  setIsGameOver,
  setIsGameStarted,
  currentLevel,
  setCurrentScore,
  setCurrentLevel,
  setClickedAnimals,
}) => {
  const onNewGameClick = () => {
    setIsGameOver(false);
    setIsGameStarted(true);
    setCurrentScore(0);
    setCurrentLevel(1);
    setClickedAnimals([]);
  };

  return (
    <Container
      style={{ maxWidth: '600px' }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <p className="fs-3">Game Over!</p>

      <p className="fs-5">
        You reached <b>{currentLevel}</b> level. Great job!
      </p>

      <p className="fs-5">
        Your final score is <b>{currentScore}</b>. Can you beat it next time?
      </p>

      <p className="fs-5 mt-4">
        Click the <b>"New game"</b> button below to start over and see if you
        can improve your score!
      </p>

      <p className="fs-5">
        Thanks for playing Remember the Animal! We hope you had fun and will
        come back to play again soon.
      </p>

      <Button onClick={() => onNewGameClick()} size="lg" className="mt-4">
        New game
      </Button>
    </Container>
  );
};
