export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {  
  //marking properties as abstract
  //will tell TypeScript that they 
  //will exist eventually in a child class
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const { length } = this;

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
        if (this.compare(j, j + 1)) {
          //shift element positions
          this.swap(j, j + 1);
        }
      }
    }
  }
}