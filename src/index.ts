class Sorter {
  constructor(public collection: number[]) {}

  /**
   * if we had a union type such as number[] | string
   * Typescript would have allowed us to read only
   * the properties which string and array have in common.
   * 
   * If we want to restore  access to
   * the properties in a union type
   * we can use type guards.
   * 
   * For number, string or boolean we use typeof
   * for anything else we use instanceof 
   * 
   * Example:
   * 
   * if (this.collection instanceof Array) {
   * }
   * 
   * OR
   * 
   * if (typeof this.collection === 'number')
   * if (typeof this.collection === 'string')
   * if (typeof this.collection === 'boolean')
   */
  
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