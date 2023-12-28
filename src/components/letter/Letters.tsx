import { getAlpha } from '../../helpers';
import Letter from './Letter';

const Letters = () => {
  return (
    <div id="letters">
      {getAlpha().map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default Letters;
