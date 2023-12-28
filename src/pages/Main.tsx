import { useContext } from 'react';
import _debounce from 'lodash/debounce';
import Letters from '../components/letter/Letters';
import PhraseContainer from '../components/phrase/PhraseContainer';
import { GlobalStateContext } from '../state/GlobalState';

const Main = () => {
  const { globalState, updateGlobalState } = useContext(GlobalStateContext);
  const { gameInstance, phrase, incorrectGuesses, wonGame } = globalState;

  const startNewGame = () => {
    updateGlobalState({
      ...globalState,
      phrase: gameInstance.getNewPhrase(),
      selectedChars: [],
      gameIsOver: false,
      wonGame: false,
      incorrectGuesses: 0,
    });
  };

  const debouncedHandleClick = _debounce(startNewGame, 300);
  return (
    <div id="main">
      <button className="start-btn" onClick={debouncedHandleClick}>
        New Game
      </button>
      <div id="game-screen">
        <p id="category">{phrase.category}</p>
        <img
          id="hangman-img"
          className={wonGame ? 'jumping-man' : ''}
          src={`/hangman/${wonGame ? 'winner' : incorrectGuesses}.png`}
        />
        <PhraseContainer />
      </div>
      <Letters />
    </div>
  );
};

export default Main;
