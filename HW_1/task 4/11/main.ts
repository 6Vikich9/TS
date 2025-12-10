/*#EKRNVPM
- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

function sum(arr:number[]): number
{
    let sumN = 0;
    for (const arrElement of arr)
    {
        sumN += arrElement;
    }
    return sumN;
}

let arr=[1, 2, 3, 4, 5,10];
let result = sum(arr);
console.log(result);