import { IPhrase } from './types';

/**
 * @param min The minimum number in the range
 * @param max The maximum number in the range
 * @returns A random number within the given range
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @returns An array of strings with the letters A - Z
 */
export const getAlpha = () => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
};

/**
 * @param character A single character (e.g. "A")
 * @returns A boolean that indicates if the character is a letter A - Z
 */
export const isAlpha = (character: string) => {
  return /^[a-zA-Z]+$/.test(character);
};

/**
 * Checks to see if every character in the phrase has been selected by the user
 * @returns A boolean that indicates if the user won the game
 */
export const userWon = (phrase: IPhrase, selectedChars: string[]) => {
  const phraseLetters = phrase.value.replace(/[^a-zA-Z]/g, '').split('');
  return phraseLetters.every((letter) => selectedChars.includes(letter));
};

export const userLost = (incorrectGuesses: number) => {
  const MAX_INCORRECT_GUESSES = 6;
  return incorrectGuesses === MAX_INCORRECT_GUESSES;
};
