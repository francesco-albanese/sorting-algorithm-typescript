import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('XaayabB');
const numberSorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);
numberSorter.sort();
stringSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);