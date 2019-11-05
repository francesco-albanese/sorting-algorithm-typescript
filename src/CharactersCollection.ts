export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    /**
     * When two characters inside a string are compared,
     * such as given string "Test" we compare T > e,
     * the actual value of comparison is T.charAt(0) and e.charAt(0)
     * which return a number.
     * So we have to compare the string first making it lower case
     */

     return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap (leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}