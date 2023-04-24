import { Button, Container, Navbar } from 'react-bootstrap';

export const ScoreBoard = ({
  highestScore,
  currentScore,
  setIsGameOver,
  setIsGameStarted,
  setCurrentScore,
  setCurrentLevel,
  setShowLevelOverlay,
  setClickedAnimals,
}) => {
  const onStartNewGameClick = () => {
    setIsGameOver(false);
    setIsGameStarted(true);
    setCurrentScore(0);
    setCurrentLevel(1);
    setShowLevelOverlay(true);
    setClickedAnimals([]);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>🎴 Remember The Animal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <div className="mx-auto d-flex justify-content-center justify-content-md-start align-items-center">
            <Navbar.Text className="fs-5 me-3 me-md-5">
              Current score: {currentScore}
            </Navbar.Text>
            <Navbar.Text className="fs-5">
              Highest score: {highestScore}
            </Navbar.Text>
          </div>
          <Button
            onClick={onStartNewGameClick}
            className="d-flex justify-content-center d-md-flex justify-content-md-end mx-auto mx-md-0"
          >
            Start new game
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
