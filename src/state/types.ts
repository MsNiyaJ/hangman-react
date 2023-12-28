import { Dispatch, SetStateAction } from 'react';
import { Game } from '../game';
import { IPhrase } from '../types';

export interface IState {
  appName: string;
  phrase: IPhrase;
  gameInstance: Game;
  startClicked: boolean;
  wonGame: boolean;
  gameIsOver: boolean;
  selectedChars: string[];
  incorrectGuesses: number;
}

export interface GlobalStateContextProps {
  globalState: IState;
  updateGlobalState: Dispatch<SetStateAction<IState>>;
}
