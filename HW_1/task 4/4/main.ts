/*#SIdMd0hQ
- створити функцію яка приймає масив та виводить кожен його елемент*/

function printArray(array:any[]):void
{
    for (const arrayElement of array)
    {
        console.log(arrayElement);
    }
}

let array:number[]= [2, 4, 8, 32];

printArray(array);