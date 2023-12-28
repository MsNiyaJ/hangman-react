import { isAlpha } from '../../helpers';

interface ICharBlock {
  chr: string;
  isCorrect: boolean;
}

const CharBlock = ({ chr, isCorrect }: ICharBlock) => {
  let boxValue = isAlpha(chr) ? '' : chr;

  if (isCorrect) {
    boxValue = chr;
  }

  return <div className="char-block">{boxValue}</div>;
};

export default CharBlock;
