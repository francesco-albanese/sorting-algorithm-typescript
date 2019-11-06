import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'; 

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('XaayabB');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const numberSorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);
const linkedListSorter = new Sorter(linkedList);

numberSorter.sort();
stringSorter.sort();
linkedListSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();