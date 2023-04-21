import { Card } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../utils/utils';

export const GameCard = ({ animal }) => {
  return (
    <Card
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
