/*#pghbnSB
- створити функцію яка повертає найменьше число з масиву*/

let number = (n:number[]):number =>
{
    let min = n[0]!;
    for (let i = 1; i < n.length; i++)
    {
        let num = n[i]!;
        if (num < min)
        {
            min = num;
        }
    }
    return min;
}

let n = [1, 2, 3, 4, 5];
console.log(number(n));
