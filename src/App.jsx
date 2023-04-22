import { useEffect, useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';

export const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highestScore, setHighestScore] = useState(
    localStorage.getItem('highestScore') || 0
  );
  const [currentScore, setCurrentScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showLevelOverlay, setShowLevelOverlay] = useState(true);
  const [clickedAnimals, setClickedAnimals] = useState([]);

  useEffect(() => {
    localStorage.setItem('highestScore', highestScore);
  }, [highestScore]);

  return (
    <>
      <ScoreBoard
        {...{
          highestScore,
          currentScore,
          setIsGameOver,
          setIsGameStarted,
          setCurrentScore,
          setCurrentLevel,
          setShowLevelOverlay,
          setClickedAnimals,
        }}
      />
      <GameBoard
        {...{
          isGameOver,
          setIsGameOver,
          currentScore,
          highestScore,
          isGameStarted,
          setIsGameStarted,
          setHighestScore,
          setCurrentScore,
          currentLevel,
          setCurrentLevel,
          showLevelOverlay,
          setShowLevelOverlay,
          clickedAnimals,
          setClickedAnimals,
        }}
      />
    </>
  );
};
