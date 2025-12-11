/*#SIdMd0hQ
- створити функцію яка приймає масив та виводить кожен його елемент*/

let printArray = (array:number[]):void =>
{
    for (const arrayElement of array)
    {
        console.log(arrayElement);
    }
}

let array= [2, 4, 8, 32];

printArray(array);