import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}
  
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      /**
       * j < length - i - 1
       * the - i is going to account for the fact
       * that once we do a full iteration though
       * the array, the rightmost element will be
       * in the correct location so we don't have
       * to sort it again in the future.
       */
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          //shift element positions
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}