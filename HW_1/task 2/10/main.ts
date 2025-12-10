/*#uwsz1RnTQJ1
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let num1:number= 100;
let num2:number= 34;
if (num1 > num2)
{
    console.log(num1 + '>' + num2);
}
else if (num1 < num2)
{
    console.log(num1 + '<' + num2);
}
else if (num1 === num2)
{
    console.log(num1 + '=' + num2);
}
else
{
    console.log('error');
}