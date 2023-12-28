import { getRandomInt } from './helpers';
import { phrases } from './phrases';
import { IPhrase } from './types';

export class Game {
  currentPhrase!: IPhrase;

  constructor() {
    this.getNewPhrase();
  }

  // Randomly select a phrase (Potential update: use an API)
  private getRandomPhrase() {
    const i = getRandomInt(0, phrases.length - 1);
    return this.formatPhrase(phrases[i]);
  }

  private formatPhrase(newPhrase: IPhrase) {
    return {
      category: newPhrase.category.toUpperCase().trim(),
      value: newPhrase.value.toUpperCase().trim(),
    };
  }

  getNewPhrase() {
    const previousPhrase = this.currentPhrase;
    let newPhrase = this.getRandomPhrase();

    // Keep fetching a new phrase if we got the same one as before
    while (previousPhrase?.value === newPhrase.value) {
      newPhrase = this.getRandomPhrase();

      if (previousPhrase?.value !== newPhrase.value) {
        break;
      }
    }

    this.currentPhrase = newPhrase;
    return newPhrase;
  }
}
