import { isAlpha } from '../../helpers';

interface ICharBlock {
  chr: string;
  isCorrect: boolean;
}

const CharBlock = ({ chr, isCorrect }: ICharBlock) => {
  let boxValue = isAlpha(chr) ? '' : chr;
  // console.log(boxValue);

  // TODO: Determine what should render
  if (isCorrect) {
    boxValue = chr;

    // console.log(boxValue);
  }

  return <div className="char-block">{boxValue}</div>;
};

export default CharBlock;
