/*#5hqyKTfmc
– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,’ascending’) // [3,11,21]
sortNums(nums,’descending’) // [21,11,3]*/

function sortNums(array:number[], direction:string):number[]
{
    if(direction === 'ascending')
    {
        return array.sort((a:number, b:number) => a - b);
    }
    if(direction === 'descending')
    {
        return array.sort((a:number, b:number) => b - a);
    }
    return array;
}

let nums:number[] = [11,21,3];
sortNums(nums,'ascending') ;
let nums1:number[] = [11,21,3];
sortNums(nums1,'descending') ;

console.log(nums);
console.log(nums1);
