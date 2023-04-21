export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const animalsNeeded = (level) => {
  if (level === 1) return 4;

  let count = 4;

  for (let i = 2; i <= currentLevel; i++) {
    count += 2;
  }

  return count;
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
