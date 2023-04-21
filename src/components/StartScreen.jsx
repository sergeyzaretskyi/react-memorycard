import { Button, Container } from 'react-bootstrap';

export const StartScreen = ({ setIsGameStarted }) => {
  return (
    <Container
      style={{ maxWidth: '600px' }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <p className="fs-3">
        Welcome to <b>Remember the Animal</b>!
      </p>

      <p className="fs-5">
        The game is simple: try to click all unique animals. But there's a catch
        - you can't click on the same animal twice!
      </p>

      <p className="fs-5">
        Test your memory and see how many animals you can remember. Your score
        will be displayed in the navbar at the top of the screen. Try to beat
        your highest score with each new game!
      </p>

      <p className="fs-5">
        Click the <b>"Start game"</b> button below to begin. Good luck!
      </p>

      <Button size="lg" className="mt-4" onClick={() => setIsGameStarted(true)}>
        Start game
      </Button>
    </Container>
  );
};
