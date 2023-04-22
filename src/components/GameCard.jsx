import { Card } from 'react-bootstrap';
import { animalsNeeded, capitalizeFirstLetter } from '../utils/utils';

export const GameCard = ({
  animal,
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
}) => {
  const onAnimalClick = (animal) => {
    const isAnimalClicked = clickedAnimals.includes(animal);

    if (isAnimalClicked) {
      setIsGameOver(true);
      setIsGameStarted(false);

      if (currentScore > highestScore) {
        setHighestScore(currentScore);
      }
    } else {
      setClickedAnimals((prev) => [...prev, animal]);
      setCurrentScore((prev) => prev + 1);

      if (clickedAnimals.length + 1 === animalsNeeded(currentLevel)) {
        setCurrentLevel((prev) => prev + 1);
        setClickedAnimals([]);

        currentLevel === 13
          ? setIsGameFinished(true)
          : setShowLevelOverlay(true);
      }
    }
  };

  return (
    <Card
      onClick={() => onAnimalClick(animal)}
      border="primary"
      style={{ width: '150px' }}
      className="bg-dark text-white hover"
    >
      <Card.Img
        style={{ height: '150px', objectFit: 'cover' }}
        src={`img/${animal}.jpg`}
      />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(animal)}</Card.Title>
      </Card.Body>
    </Card>
  );
};
