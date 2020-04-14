// 1. adattípusok
// konstans
const pi = 3.14;

// változó
let a = 2;
a = 'szöveg';

// tömb, 1 vagy több dimenziós
let array = [];
array = [1, 2, 4, 8];
array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// objektum, kulcs-érték pár
const object = {
  napraforgo: a,
  kutya: 'vau',
  cica: 'miau'
};

// 2. referencia vs érték szerinti paraméterátadás
/*
Érték szerinti átadáskor a függvény nem mósodítja az eredeti változó értékét, míg referencia szerinti átadáskor pl. tömb esetében megváltozik az eredeti tömb tartalma is.
*/

// 3. eldöntés tétele
const contains = (number, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
};
console.log('Tartalmazza a tömb a megadott számot? ' + contains(9, [1, 2, 3, 4, 6, 9]));

// 4. tömb maximuma
const maxOfArray = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
console.log('Max of array:', maxOfArray([1, 22, 3, 4, 6, 9]));

// 5. 2-vel osztható pozitív 2 jegyű számok
const twodivtwo = () => {
  const result = [];
  for (let i = 10; i < 100; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  console.log(result);
};
twodivtwo();

// 6. metszet tétele
const intersection = (array1, array2) => {
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array3.push(array1[i]);
        break;
      }
    }
  }
  return array3;
};
arr1 = [1, 2, 3, 4, 6, 9];
arr2 = [1, 22, 3, 4, 3, 12];
console.log('A két tömb metszete: ' + intersection(arr1, arr2));

// 7. add, multiply, exp függvények modulból betöltve
const mod = require('./module');
console.log('Összeadás: ' + mod.add(2, 10));
console.log('Szorzás: ' + mod.multiply(2, 10));
console.log('Hatványozás: ' + mod.exp(2, 10));

// 8. 2D tömb
