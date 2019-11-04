class Sorter {
  constructor(public collection: number[]) {}
  
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
        if (this.collection[j] > this.collection[j + 1]) {
          //shift element positions
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([-1, 10, 5, 0, 3]);
sorter.sort();
console.log('sorter.collection', sorter.collection);