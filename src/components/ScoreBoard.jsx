import { Button, Container, Navbar } from 'react-bootstrap';

export const ScoreBoard = ({ highestScore, currentScore }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">🎴 Remember The Animal</Navbar.Brand>
        <div>
          <Navbar.Text className="fs-5 me-5">
            Current score: {currentScore}
          </Navbar.Text>
          <Navbar.Text className="fs-5">
            Highest score: {highestScore}
          </Navbar.Text>
        </div>
        <Button>Start new game</Button>
      </Container>
    </Navbar>
  );
};
