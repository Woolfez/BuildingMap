// 1.
let par = 1;
for (let par = 1; par < 4; par){
    par++;
    console.log(par);
} 

// 2. Массив вывод четных чисел
const arr = [1, 2, 3, 4 ,5];

for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 2 === 0) {
        console.log('Четные числа:', number);
    }
}

// 3. Массив {x,y}
let points = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: 5, y: 6},
    {x: 7, y: 8},
]

// 4. Поменять местами первый и последний элемент массива

function  swap(arr) {
if (arr.length > 1) {
    let firstElement = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = firstElement
    }
return arr;
}

let myArray = [1,2,3,4,5];
swap(myArray);
console.log(myArray);

//5. Все четные элементы заполнить нулями

function evenZero(arr){
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr[i] = 0;
        }
    }
return arr;
}
let myArray = [1,2,3,4,5];
evenZero(myArray);
console.log(myArray);

//6. Все элементы с четным индексом увеличить в 2 раза

function multiplyByTwoEven(arr){
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
            arr[i] *= 2;
    }
}
return arr;
}

let myArray = [1,2,3,4,5];
multiplyByTwoEven(myArray);
console.log(myArray);

//7. 
