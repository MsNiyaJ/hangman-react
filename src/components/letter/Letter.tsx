import { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../state/GlobalState';
import { IState } from '../../state/types';
import { userLost, userWon } from '../../helpers';

interface ILetter {
  letter: string;
}

const Letter = ({ letter }: ILetter) => {
  const { globalState, updateGlobalState } = useContext(GlobalStateContext);
  const { gameIsOver, phrase, incorrectGuesses } = globalState;

  const [className, setClassName] = useState('');
  const [disabled, setDisabled] = useState(false);

  const updatedState: IState = {
    ...globalState,
  };

  const isGameOver = () => {
    // The game is over when a user correctly guesses the phrase or
    // when they guess incorrectly the max amount of times.
    const won = userWon(phrase, updatedState.selectedChars);
    const lost = userLost(updatedState.incorrectGuesses);
    updatedState.gameIsOver = won || lost;
    updatedState.wonGame = won;
  };

  const displayLetter = () => {
    const colorClass = phrase.value.includes(letter) ? 'correct' : 'incorrect';

    if (colorClass === 'incorrect') {
      updatedState.incorrectGuesses = incorrectGuesses + 1;
    }

    updatedState.selectedChars = [...globalState.selectedChars, letter];

    isGameOver();
    setDisabled(true);
    setClassName(colorClass);
    updateGlobalState(updatedState);
  };

  useEffect(() => {
    setClassName('');
    setDisabled(false);
  }, [phrase]);

  return (
    <button
      className={`letter ${className}`}
      disabled={gameIsOver || disabled}
      onClick={displayLetter}
    >
      {letter}
    </button>
  );
};

export default Letter;
