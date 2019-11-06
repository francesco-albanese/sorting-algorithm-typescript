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

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();