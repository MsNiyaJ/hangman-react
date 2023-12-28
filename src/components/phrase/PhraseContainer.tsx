import { useContext } from 'react';
import { GlobalStateContext } from '../../state/GlobalState';
import CharBlock from './CharBlock';

const PhraseContainer = () => {
  const { globalState } = useContext(GlobalStateContext);
  const phraseByWord = globalState.phrase.value.split(' ');

  return (
    <div id="phrase-container">
      {phraseByWord.map((word, wordIndex) => {
        const wordByChar = word.split('');

        return (
          <div key={wordIndex} className="word-block">
            {wordByChar.map((chr, chrIndex) => (
              <CharBlock
                key={`${word}-${wordIndex}-${chrIndex}`}
                chr={chr}
                isCorrect={globalState.selectedChars.includes(chr)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PhraseContainer;
