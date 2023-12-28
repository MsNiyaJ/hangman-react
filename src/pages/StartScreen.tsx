import { useContext } from 'react';
import { GlobalStateContext } from '../state/GlobalState';

const StartScreen = () => {
  const { globalState, updateGlobalState } = useContext(GlobalStateContext);

  const handleClick = () => {
    updateGlobalState({ ...globalState, startClicked: true });
  };

  return (
    <div id="start-screen">
      <img
        id="noose"
        src="./noose.png"
        aria-label="Image of a noose from https://images.rawpixel.com/"
      />
      <h1 id="title">{globalState.appName}</h1>
      <button className="start-btn" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;
