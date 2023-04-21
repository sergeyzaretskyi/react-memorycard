export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const animalsNeeded = (level) => {
  if (level === 1) return 4;

  let count = 4;

  for (let i = 2; i <= level; i++) {
    count += 2;
  }

  return count;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const animalNames = [
  'dolphin',
  'lion',
  'ferret',
  'whale',
  'hamster',
  'swan',
  'fox',
  'cow',
  'parrot',
  'alligator',
  'rat',
  'cat',
  'duck',
  'otter',
  'goat',
  'horse',
  'sheep',
  'frog',
  'squirrel',
  'chipmunk',
  'bear',
  'rooster',
  'dog',
  'panda',
  'elephant',
  'raven',
  'wolf',
  'goose',
];
