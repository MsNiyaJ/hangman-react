import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Game } from '../game';
import { GlobalStateContextProps, IState } from './types';

const game = new Game();
const initialState: IState = {
  appName: 'HANGMAN',
  gameInstance: game,
  startClicked: false,
  gameIsOver: false,
  wonGame: false,
  phrase: game.currentPhrase,
  selectedChars: [],
  incorrectGuesses: 0,
};

export const GlobalStateContext = createContext<GlobalStateContextProps>({
  globalState: initialState,
  updateGlobalState: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<IState>(initialState);

  const updateGlobalState: Dispatch<SetStateAction<IState>> = (newState) => {
    setGlobalState((prevGlobalState) => ({ ...prevGlobalState, ...newState }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
