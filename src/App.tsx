import { useContext } from 'react';
import { GlobalStateContext } from './state/GlobalState';
import StartScreen from './pages/StartScreen';
import Main from './pages/Main';
import './scss/main.scss';

function App() {
  const { globalState } = useContext(GlobalStateContext);
  return globalState.startClicked ? <Main /> : <StartScreen />;
}

export default App;
