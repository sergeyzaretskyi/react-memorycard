import '../css/style.css';

export const LevelOverlay = ({ currentLevel }) => {
  return (
    <div className="overlay-container" style={{ display: 'block' }}>
      <div className="overlay-content">
        <p className="fs-3">Level {currentLevel}</p>
      </div>
    </div>
  );
};
